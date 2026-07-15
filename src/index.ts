import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as prompts from '@clack/prompts'
import mri from 'mri'
import pc from 'picocolors'
import {
  BUNDLER_OPTIONS,
  UI_OPTIONS,
  TEMPLATES,
  findTemplateById,
  findTemplateByParts,
  type Bundler,
  type TemplateImportMode,
  type UiFramework,
  type VueTemplateStyle,
} from './templates.js'

const cwd = process.cwd()
const defaultTargetDir = 'tdesign-app'
type PackageManager = 'npm' | 'pnpm' | 'bun' | 'yarn'
const VUE_TEMPLATE_STYLE_OPTIONS: Array<{ value: VueTemplateStyle; label: string }> = [
  { value: 'sfc', label: 'SFC (Recommended)' },
  { value: 'tsx', label: 'TSX' },
]

const VUE_TEMPLATE_IMPORT_MODE_OPTIONS: Array<{
  value: TemplateImportMode
  label: string
}> = [
  { value: 'full', label: 'Full (Recommended)' },
  { value: 'on-demand', label: 'On-demand' },
]

const PACKAGE_MANAGER_OPTIONS: Array<{ value: PackageManager; label: string }> = [
  { value: 'npm', label: 'npm' },
  { value: 'pnpm', label: 'pnpm' },
  { value: 'bun', label: 'bun' },
  { value: 'yarn', label: 'yarn' },
]

const renameFiles: Record<string, string | undefined> = {
  _gitignore: '.gitignore',
}

const argv = mri<{
  template?: string
  ui?: string
  bundler?: string
  'import-mode'?: string
  help?: boolean
  force?: boolean
  yes?: boolean
  'package-manager'?: string
}>(process.argv.slice(2), {
  alias: {
    h: 'help',
    t: 'template',
    f: 'force',
    y: 'yes',
    pm: 'package-manager',
  },
  boolean: ['help', 'force', 'yes'],
  string: ['template', 'ui', 'bundler', 'import-mode', 'package-manager'],
})

const helpMessage = `Usage: create-tdesign [OPTION]... [DIRECTORY]

Scaffold a TDesign project with TypeScript.

Options:
  -t, --template NAME       use a specific template
      --ui NAME             choose a UI framework
      --bundler NAME        choose a bundler (vite, rsbuild, vike)
      --import-mode NAME    choose a Vue import mode (full, on-demand)
      --package-manager     choose a package manager (npm, pnpm, bun, yarn)
      --pm NAME             alias of --package-manager
  -f, --force               remove existing files in the target directory
  -y, --yes                 skip prompts when possible
  -h, --help                display this help message

Available templates:
${renderTemplateHelp()}
`

async function init() {
  if (argv.help) {
    console.log(helpMessage)
    return
  }

  const interactive = process.stdin.isTTY && !argv.yes
  const cancel = (message = 'Operation cancelled') => prompts.cancel(message)

  prompts.intro(pc.bold('create-tdesign'))

  const targetDir = await resolveTargetDir(interactive)
  if (!targetDir) {
    cancel()
    return
  }

  if (!(await prepareTargetDir(targetDir, interactive))) {
    return
  }

  const packageName = await resolvePackageName(targetDir, interactive)
  if (!packageName) {
    cancel()
    return
  }

  const template = await resolveTemplate(interactive)
  if (!template) {
    cancel()
    return
  }

  const packageManager = await resolvePackageManager(interactive)
  if (!packageManager) {
    cancel()
    return
  }

  const root = path.resolve(cwd, targetDir)
  fs.mkdirSync(root, { recursive: true })
  prompts.log.step(`Scaffolding ${template.display} in ${root}`)

  const packageRoot = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
  const templateDir = path.join(packageRoot, 'templates', template.id)
  scaffoldTemplate(templateDir, root, {
    projectName: path.basename(root),
    packageName,
    templateName: template.display,
    devCommand: getRunCommand(packageManager, 'dev'),
  }, packageManager)

  prompts.outro(renderDoneMessage(root, packageManager))
}

async function resolveTargetDir(interactive: boolean) {
  const argTargetDir = argv._[0] ? formatTargetDir(String(argv._[0])) : undefined
  if (argTargetDir) {
    return argTargetDir
  }

  if (!interactive) {
    fail('Missing project directory. Run with a directory name or use interactive mode.')
  }

  const projectName = await prompts.text({
    message: 'Project name:',
    placeholder: defaultTargetDir,
    defaultValue: defaultTargetDir,
    validate(value) {
      return typeof value === 'string' && formatTargetDir(value).length > 0
        ? undefined
        : 'Invalid project name'
    },
  })

  if (prompts.isCancel(projectName)) {
    return undefined
  }

  return formatTargetDir(projectName)
}

async function prepareTargetDir(targetDir: string, interactive: boolean) {
  if (!fs.existsSync(targetDir) || isEmpty(targetDir)) {
    return true
  }

  if (argv.force) {
    emptyDir(targetDir)
    return true
  }

  if (!interactive) {
    fail(`Target directory "${targetDir}" is not empty. Use --force to overwrite it.`)
  }

  const shouldOverwrite = await prompts.confirm({
    message:
      (targetDir === '.' ? 'Current directory' : `Target directory "${targetDir}"`) +
      ' is not empty. Remove existing files and continue?',
    initialValue: false,
  })

  if (prompts.isCancel(shouldOverwrite) || !shouldOverwrite) {
    prompts.cancel('Operation cancelled')
    return false
  }

  emptyDir(targetDir)
  return true
}

async function resolvePackageName(targetDir: string, interactive: boolean) {
  const currentName = path.basename(path.resolve(targetDir))
  if (isValidPackageName(currentName)) {
    return currentName
  }

  const suggestion = toValidPackageName(currentName)
  if (!interactive) {
    return suggestion
  }

  const packageName = await prompts.text({
    message: 'Package name:',
    defaultValue: suggestion,
    placeholder: suggestion,
    validate(value) {
      return typeof value === 'string' && isValidPackageName(value)
        ? undefined
        : 'Invalid package.json name'
    },
  })

  if (prompts.isCancel(packageName)) {
    return undefined
  }

  return packageName
}

async function resolveTemplate(interactive: boolean) {
  if (argv.template) {
    const template = findTemplateById(argv.template)
    if (template) {
      return template
    }

    fail(`Unknown template "${argv.template}".\n\n${helpMessage}`)
  }

  if (argv.ui || argv.bundler) {
    if (!argv.ui || !argv.bundler) {
      fail('Both --ui and --bundler are required when selecting a template by parts.')
    }

    const ui = normalizeUi(argv.ui)
    const bundler = normalizeBundler(argv.bundler)
    const vueTemplateStyle = isVueRelatedUi(ui) ? 'sfc' : undefined
    const importMode = isVueImportModeSupportedUi(ui) && argv['import-mode']
      ? normalizeImportMode(argv['import-mode'])
      : undefined

    const template = findTemplateByParts(ui, bundler, vueTemplateStyle, importMode)

    if (template) {
      return template
    }

    fail(`Unsupported combination: ui=${argv.ui}, bundler=${argv.bundler}.`)
  }

  if (!interactive) {
    fail('Missing template. Use --template, or provide --ui and --bundler.')
  }

  const ui = await prompts.select({
    message: 'Select a UI framework:',
    options: UI_OPTIONS.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  })

  if (prompts.isCancel(ui)) {
    return undefined
  }

  const normalizedUi = ui as UiFramework

  const bundler = await prompts.select({
    message: 'Select a bundler:',
    options: BUNDLER_OPTIONS.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  })

  if (prompts.isCancel(bundler)) {
    return undefined
  }

  const normalizedBundler = bundler as Bundler
  const vueTemplateStyle = isVueRelatedUi(normalizedUi)
    ? await resolveVueTemplateStyle()
    : undefined

  if (isVueRelatedUi(normalizedUi) && !vueTemplateStyle) {
    return undefined
  }

  const importMode = isVueImportModeSupportedUi(normalizedUi) && vueTemplateStyle === 'sfc'
    ? await resolveVueImportMode()
    : undefined

  if (isVueImportModeSupportedUi(normalizedUi) && vueTemplateStyle === 'sfc' && !importMode) {
    return undefined
  }

  return findTemplateByParts(normalizedUi, normalizedBundler, vueTemplateStyle, importMode)
}

async function resolveVueTemplateStyle() {
  const vueTemplateStyle = await prompts.select({
    message: 'Select a Vue component style:',
    options: VUE_TEMPLATE_STYLE_OPTIONS.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  })

  if (prompts.isCancel(vueTemplateStyle)) {
    return undefined
  }

  return vueTemplateStyle as VueTemplateStyle
}

async function resolveVueImportMode() {
  const vueImportMode = await prompts.select({
    message: 'Select a Vue import mode:',
    options: VUE_TEMPLATE_IMPORT_MODE_OPTIONS.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  })

  if (prompts.isCancel(vueImportMode)) {
    return undefined
  }

  return vueImportMode as TemplateImportMode
}

async function resolvePackageManager(interactive: boolean) {
  if (argv['package-manager']) {
    return normalizePackageManager(argv['package-manager'])
  }

  const detectedPackageManager = detectCurrentPackageManager()

  if (!interactive) {
    return detectedPackageManager ?? 'pnpm'
  }

  const packageManager = await prompts.select({
    message: 'Select a package manager:',
    options: orderPackageManagerOptions(detectedPackageManager).map((option) => ({
      label: option.label,
      value: option.value,
    })),
  })

  if (prompts.isCancel(packageManager)) {
    return undefined
  }

  return packageManager as PackageManager
}

function scaffoldTemplate(
  templateDir: string,
  root: string,
  context: Record<string, string>,
  packageManager: PackageManager,
) {
  for (const entry of fs.readdirSync(templateDir)) {
    if (shouldSkipTemplateEntry(entry, packageManager)) {
      continue
    }

    copyEntry(path.join(templateDir, entry), path.join(root, renameFiles[entry] ?? entry), context)
  }
}

function shouldSkipTemplateEntry(entry: string, packageManager: PackageManager) {
  return entry === 'pnpm-workspace.yaml' && packageManager !== 'pnpm'
}

function copyEntry(source: string, destination: string, context: Record<string, string>) {
  const stat = fs.statSync(source)
  if (stat.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true })
    for (const entry of fs.readdirSync(source)) {
      copyEntry(path.join(source, entry), path.join(destination, renameFiles[entry] ?? entry), context)
    }
    return
  }

  const content = fs.readFileSync(source)
  if (content.includes(0)) {
    fs.writeFileSync(destination, content)
    return
  }

  fs.writeFileSync(destination, applyPlaceholders(content.toString('utf8'), context))
}

function applyPlaceholders(content: string, context: Record<string, string>) {
  return Object.entries(context).reduce((result, [key, value]) => {
    return result.replaceAll(`__${key.toUpperCase()}__`, value)
  }, content)
}

function renderDoneMessage(root: string, packageManager: PackageManager) {
  const relativeRoot = path.relative(cwd, root)
  const cdTarget = relativeRoot && !relativeRoot.startsWith('..') ? relativeRoot : root
  let message = 'Done. Next steps:\n'

  if (root !== cwd) {
    message += `\n  cd ${cdTarget.includes(' ') ? `"${cdTarget}"` : cdTarget}`
  }

  message += `\n  ${getInstallCommand(packageManager)}`
  message += `\n  ${getRunCommand(packageManager, 'dev')}`

  return message
}

function renderTemplateHelp() {
  const width = Math.max(...TEMPLATES.map((template) => template.id.length)) + 2

  return TEMPLATES.map((template) => {
    const color = template.ui.includes('react') ? pc.cyan : pc.green
    return `  ${color(template.id.padEnd(width))} ${template.description}`
  }).join('\n')
}

function orderPackageManagerOptions(selected?: PackageManager) {
  if (!selected) {
    return PACKAGE_MANAGER_OPTIONS
  }

  const preferred = PACKAGE_MANAGER_OPTIONS.find((option) => option.value === selected)
  const rest = PACKAGE_MANAGER_OPTIONS.filter((option) => option.value !== selected)

  return preferred ? [preferred, ...rest] : PACKAGE_MANAGER_OPTIONS
}

function formatTargetDir(targetDir: string) {
  const trimmed = targetDir.trim().replace(/[\\/]+$/g, '')

  if (path.isAbsolute(trimmed)) {
    return trimmed
  }

  return trimmed.replace(/[<>:"|?*]/g, '')
}

function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-~][a-z\d\-._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName)
}

function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

function isEmpty(directory: string) {
  const files = fs.readdirSync(directory)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function emptyDir(directory: string) {
  for (const file of fs.readdirSync(directory)) {
    if (file === '.git') {
      continue
    }
    fs.rmSync(path.join(directory, file), { recursive: true, force: true })
  }
}

function normalizeUi(value: string): UiFramework {
  const match = UI_OPTIONS.find((option) => option.value === value)
  if (match) {
    return match.value
  }
  fail(`Unsupported UI framework "${value}".`)
}

function isVueRelatedUi(value: UiFramework) {
  return value === 'vue' || value === 'mobile-vue' || value === 'vue-chat'
}

function isVueImportModeSupportedUi(value: UiFramework) {
  return value === 'vue' || value === 'mobile-vue' || value === 'vue-chat'
}

function normalizeBundler(value: string): Bundler {
  const match = BUNDLER_OPTIONS.find((option) => option.value === value)
  if (match) {
    return match.value
  }

  fail(`Unsupported bundler "${value}".`)
}

function normalizeImportMode(value: string): TemplateImportMode {
  if (value === 'full' || value === 'on-demand') {
    return value
  }
  fail(`Unsupported import mode "${value}".`)
}

function normalizePackageManager(value: string): PackageManager {
  const match = PACKAGE_MANAGER_OPTIONS.find((option) => option.value === value)
  if (match) {
    return match.value
  }
  fail(`Unsupported package manager "${value}".`)
}

function detectCurrentPackageManager() {
  const userAgent = process.env.npm_config_user_agent
  if (!userAgent) {
    return undefined
  }

  const packageManager = userAgent.split(' ')[0]?.split('/')[0]
  if (!packageManager) {
    return undefined
  }

  return PACKAGE_MANAGER_OPTIONS.find((option) => option.value === packageManager)?.value
}

function getInstallCommand(packageManager: PackageManager) {
  if (packageManager === 'yarn') {
    return 'yarn'
  }

  return `${packageManager} install`
}

function getRunCommand(packageManager: PackageManager, script: string) {
  switch (packageManager) {
    case 'npm':
      return `npm run ${script}`
    case 'pnpm':
    case 'yarn':
      return `${packageManager} ${script}`
    case 'bun':
      return `bun run ${script}`
  }
}

function fail(message: string): never {
  throw new Error(message)
}

init().catch((error) => {
  prompts.cancel(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
