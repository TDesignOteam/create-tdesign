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
  type UiFramework,
} from './templates.js'

const cwd = process.cwd()
const defaultTargetDir = 'tdesign-app'
type PackageManager = 'npm' | 'pnpm' | 'bun' | 'yarn'

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
  string: ['template', 'ui', 'bundler', 'package-manager'],
})

const helpMessage = `Usage: create-tdesign [OPTION]... [DIRECTORY]

Scaffold a TDesign project with TypeScript.

Options:
  -t, --template NAME       use a specific template
      --ui NAME             choose a UI framework
      --bundler NAME        choose a bundler (vite, rspack)
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
  })

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

    const template = findTemplateByParts(
      normalizeUi(argv.ui),
      normalizeBundler(argv.bundler),
    )

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

  return findTemplateByParts(ui as UiFramework, bundler as Bundler)
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
) {
  for (const entry of fs.readdirSync(templateDir)) {
    copyEntry(path.join(templateDir, entry), path.join(root, renameFiles[entry] ?? entry), context)
  }
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

  const content = fs.readFileSync(source, 'utf8')
  fs.writeFileSync(destination, applyPlaceholders(content, context))
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
  return TEMPLATES.map((template) => {
    const color = template.ui.includes('react') ? pc.cyan : pc.green
    return `  ${color(template.id.padEnd(20))} ${template.description}`
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

function normalizeBundler(value: string): Bundler {
  if (value === 'vite' || value === 'rspack') {
    return value
  }
  fail(`Unsupported bundler "${value}".`)
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
