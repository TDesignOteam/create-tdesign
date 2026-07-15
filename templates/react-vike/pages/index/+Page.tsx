import { useEffect, useState } from 'react'
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
} from 'tdesign-icons-react'
import { Button, Card, Tag, Tooltip } from 'tdesign-react'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/react/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-react'
const themeKey = 'tdesign-starter-theme'

const applyTheme = (theme: Theme) => {
  if (theme === 'dark') document.documentElement.setAttribute('theme-mode', 'dark')
  else document.documentElement.removeAttribute('theme-mode')
}

const overview = [
  { icon: CodeIcon, label: 'Application', value: 'React + Vike' },
  { icon: AppIcon, label: 'Design system', value: 'TDesign Desktop' },
  { icon: CheckCircleIcon, label: 'Workspace', value: 'SSR ready' },
]

const tasks = [
  {
    title: 'Start the development server',
    detail: 'Run the generated command from your project directory.',
  },
  {
    title: 'Shape the application shell',
    detail: 'Edit pages/index/+Page.tsx and the layout to match your product.',
  },
  {
    title: 'Build the first workflow',
    detail: 'Compose TDesign components around a real user task.',
  },
]

export default function Page() {
  const [theme, setTheme] = useState<Theme>('light')
  const isDark = theme === 'dark'

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeKey)
    const initialTheme =
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem(themeKey, nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <div className="starter-page">
      <header className="topbar">
        <div className="topbar-inner">
          <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
          <div className="topbar-actions">
            <Tooltip content="React component documentation">
              <Button
                tag="a"
                href={docsUrl}
                target="_blank"
                shape="circle"
                variant="text"
                aria-label="Open React component documentation"
              >
                <BookOpenIcon />
              </Button>
            </Tooltip>
            <Tooltip content="TDesign React on GitHub">
              <Button
                tag="a"
                href={githubUrl}
                target="_blank"
                shape="circle"
                variant="text"
                aria-label="Open TDesign React on GitHub"
              >
                <LogoGithubIcon />
              </Button>
            </Tooltip>
            <Tooltip content={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
              <Button
                shape="circle"
                variant="text"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                onClick={toggleTheme}
              >
                {isDark ? <SunnyIcon /> : <MoonIcon />}
              </Button>
            </Tooltip>
          </div>
        </div>
      </header>

      <main className="workspace">
        <section className="welcome" aria-labelledby="starter-title">
          <div className="welcome-copy">
            <Tag theme="primary" variant="light">
              __TEMPLATENAME__
            </Tag>
            <h1 id="starter-title">__PROJECTNAME__ is ready.</h1>
            <p>
              A focused starting point for building a reliable desktop application with TDesign.
            </p>
          </div>
          <a className="docs-action" href={docsUrl} target="_blank" rel="noreferrer">
            Explore components <ArrowRightIcon />
          </a>
        </section>

        <section className="command-panel" aria-label="Development command">
          <span className="command-icon">
            <CodeIcon />
          </span>
          <div className="command-copy">
            <span>Development command</span>
            <code>__DEVCOMMAND__</code>
          </div>
          <Tag className="ready-tag" theme="success" variant="light">
            Ready
          </Tag>
        </section>

        <section className="overview-grid" aria-label="Project overview">
          {overview.map((item) => {
            const ItemIcon = item.icon
            return (
              <Card key={item.label} className="overview-card" bordered>
                <span className="overview-icon">
                  <ItemIcon />
                </span>
                <div>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </div>
              </Card>
            )
          })}
        </section>

        <section className="work-grid">
          <Card
            className="work-card"
            title="Getting started"
            bordered
            actions={
              <span className="section-status">
                <span className="status-dot" />
                Project initialized
              </span>
            }
          >
            <div className="task-list">
              {tasks.map((task, index) => (
                <div key={task.title} className="task-row">
                  <span className="task-index">{index + 1}</span>
                  <div>
                    <strong>{task.title}</strong>
                    <p>{task.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="work-card resources-card" title="Resources" bordered>
            <a href="/dependencies">
              <span className="resource-icon">
                <ComponentGridIcon />
              </span>
              <span>
                <strong>Dependencies</strong>
                <small>Review runtime and development packages</small>
              </span>
              <ChevronRightIcon />
            </a>
            <a href={docsUrl} target="_blank" rel="noreferrer">
              <span className="resource-icon">
                <BookOpenIcon />
              </span>
              <span>
                <strong>Component docs</strong>
                <small>APIs, examples, and design guidance</small>
              </span>
              <ChevronRightIcon />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <span className="resource-icon">
                <LogoGithubIcon />
              </span>
              <span>
                <strong>GitHub repository</strong>
                <small>Source, issues, and releases</small>
              </span>
              <ChevronRightIcon />
            </a>
            <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
              <span className="resource-icon resource-icon-green">
                <BrowseIcon />
              </span>
              <span>
                <strong>TDesign overview</strong>
                <small>Explore the full design system</small>
              </span>
              <ChevronRightIcon />
            </a>
          </Card>
        </section>
      </main>
    </div>
  )
}
