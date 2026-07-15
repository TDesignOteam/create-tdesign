import { computed, defineComponent, ref } from 'vue'
import {
  AppIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BrowseIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CodeIcon,
  ComponentGridIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import { Button as TButton, Card as TCard, Tag as TTag, Tooltip as TTooltip } from 'tdesign-vue-next'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/vue-next/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-vue-next'
const themeKey = 'tdesign-starter-theme'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  const savedTheme = window.localStorage.getItem(themeKey)
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return
  if (theme === 'dark') document.documentElement.setAttribute('theme-mode', 'dark')
  else document.documentElement.removeAttribute('theme-mode')
}

const overview = [
  { icon: CodeIcon, label: 'Application', value: 'Vue 3 + TSX' },
  { icon: AppIcon, label: 'Design system', value: 'TDesign Desktop' },
  { icon: CheckCircleIcon, label: 'Workspace', value: 'Ready to develop' },
]

const tasks = [
  { title: 'Start the development server', detail: 'Run the generated command from your project directory.' },
  { title: 'Shape the application shell', detail: 'Edit src/pages/Home.tsx and the router to match your product.' },
  { title: 'Build the first workflow', detail: 'Compose TDesign components around a real user task.' },
]

export default defineComponent(() => {
  const theme = ref<Theme>(getInitialTheme())
  const isDark = computed(() => theme.value === 'dark')
  const logo = computed(() => (isDark.value ? logoDark : logoLight))

  applyTheme(theme.value)

  const toggleTheme = () => {
    theme.value = isDark.value ? 'light' : 'dark'
    window.localStorage.setItem(themeKey, theme.value)
    applyTheme(theme.value)
  }

  return () => (
    <div class="starter-page">
      <header class="topbar">
        <div class="topbar-inner">
          <img class="brand-logo" src={logo.value} alt="TDesign" />
          <div class="topbar-actions">
            <TTooltip content="Vue component documentation">
              <TButton tag="a" href={docsUrl} shape="circle" variant="text" aria-label="Open Vue component documentation">
                <BookOpenIcon />
              </TButton>
            </TTooltip>
            <TTooltip content="TDesign Vue on GitHub">
              <TButton tag="a" href={githubUrl} shape="circle" variant="text" aria-label="Open TDesign Vue on GitHub">
                <LogoGithubIcon />
              </TButton>
            </TTooltip>
            <TTooltip content={isDark.value ? 'Switch to light theme' : 'Switch to dark theme'}>
              <TButton shape="circle" variant="text" aria-label={isDark.value ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme}>
                {isDark.value ? <SunnyIcon /> : <MoonIcon />}
              </TButton>
            </TTooltip>
          </div>
        </div>
      </header>

      <main class="workspace">
        <section class="welcome" aria-labelledby="starter-title">
          <div class="welcome-copy">
            <TTag theme="primary" variant="light">__TEMPLATENAME__</TTag>
            <h1 id="starter-title">__PROJECTNAME__ is ready.</h1>
            <p>A focused starting point for building a reliable desktop application with TDesign.</p>
          </div>
          <a class="docs-action" href={docsUrl} target="_blank" rel="noreferrer">
            Explore components <ArrowRightIcon />
          </a>
        </section>

        <section class="command-panel" aria-label="Development command">
          <span class="command-icon"><CodeIcon /></span>
          <div class="command-copy"><span>Development command</span><code>__DEVCOMMAND__</code></div>
          <TTag class="ready-tag" theme="success" variant="light">Ready</TTag>
        </section>

        <section class="overview-grid" aria-label="Project overview">
          {overview.map((item) => {
            const ItemIcon = item.icon
            return (
              <TCard key={item.label} class="overview-card" bordered>
                <span class="overview-icon"><ItemIcon /></span>
                <div><p>{item.label}</p><strong>{item.value}</strong></div>
              </TCard>
            )
          })}
        </section>

        <section class="work-grid">
          <TCard class="work-card" title="Getting started" bordered actions={() => <span class="section-status"><span class="status-dot" />Project initialized</span>}>
            <div class="task-list">
              {tasks.map((task, index) => (
                <div key={task.title} class="task-row">
                  <span class="task-index">{index + 1}</span>
                  <div><strong>{task.title}</strong><p>{task.detail}</p></div>
                </div>
              ))}
            </div>
          </TCard>

          <TCard class="work-card resources-card" title="Resources" bordered>
            <a href="./dependencies">
              <span class="resource-icon"><ComponentGridIcon /></span>
              <span><strong>Dependencies</strong><small>Review runtime and development packages</small></span>
              <ChevronRightIcon />
            </a>
            <a href={docsUrl} target="_blank" rel="noreferrer">
              <span class="resource-icon"><BookOpenIcon /></span>
              <span><strong>Component docs</strong><small>APIs, examples, and design guidance</small></span>
              <ChevronRightIcon />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <span class="resource-icon"><LogoGithubIcon /></span>
              <span><strong>GitHub repository</strong><small>Source, issues, and releases</small></span>
              <ChevronRightIcon />
            </a>
            <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
              <span class="resource-icon resource-icon-green"><BrowseIcon /></span>
              <span><strong>TDesign overview</strong><small>Explore the full design system</small></span>
              <ChevronRightIcon />
            </a>
          </TCard>
        </section>
      </main>
    </div>
  )
})
