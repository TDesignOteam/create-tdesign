import { useEffect, useState } from 'react'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import {
  Avatar,
  Badge,
  Button,
  Cell,
  CellGroup,
  Navbar,
  Tag,
  Typography,
} from 'tdesign-mobile-react'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const docsUrl = 'https://tdesign.tencent.com/mobile-react/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-mobile-react'

const techInfo = [
  { label: '构建工具', value: 'Vike' },
  { label: '组件库', value: 'tdesign-mobile-react' },
  { label: '开发语言', value: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: '/dependencies' },
  { label: '组件文档', href: docsUrl, external: true },
]

export default function Page() {
  const [isDark, setIsDark] = useState(false)
  const [count, setCount] = useState(0)
  const themeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  function applyTheme(dark: boolean) {
    setIsDark(dark)
    document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light')
  }
  function toggleTheme() {
    const nextDark = !isDark
    applyTheme(nextDark)
    localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light')
  }
  function openLink(url: string, internal = false) {
    if (internal) {
      window.location.assign(url)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    applyTheme(
      savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="page-shell">
      <Navbar
        className="brand-navbar"
        fixed={false}
        left={
          <div className="brand-lockup">
            <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
            <Tag className="template-tag" theme="primary" variant="light">
              __TEMPLATENAME__
            </Tag>
          </div>
        }
        right={
          <div className="navbar-actions">
            <a
              className="icon-button"
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="组件文档"
              title="组件文档"
            >
              <BookOpenIcon size="20px" />
            </a>
            <a
              className="icon-button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <LogoGithubIcon size="20px" />
            </a>
            <button
              className="theme-button"
              type="button"
              aria-label={themeLabel}
              title={themeLabel}
              onClick={(event) => {
                event.stopPropagation()
                toggleTheme()
              }}
            >
              {isDark ? <SunnyIcon size="20px" /> : <MoonIcon size="20px" />}
            </button>
          </div>
        }
      />
      <section className="intro-band">
        <div className="content-width intro-content">
          <div>
            <Typography.Title className="intro-title" level="h1">
              __PROJECTNAME__
            </Typography.Title>
            <Typography.Paragraph className="intro-copy">
              一个基于 TDesign 的简单交互示例。
            </Typography.Paragraph>
          </div>
          <Tag className="template-id" theme="primary" variant="light">
            __TEMPLATENAME__
          </Tag>
        </div>
      </section>
      <div className="content-width workspace">
        <section className="demo-panel" aria-label="交互示例">
          <div className="demo-head">
            <div className="demo-title">
              <Badge dot color="var(--td-success-color)" />
              示例
            </div>
            <span className="demo-subtitle">交互示例</span>
          </div>
          <div className="demo-stage">
            <div className="demo-card">
              <Avatar
                className="demo-mark"
                size="52px"
                shape="round"
                style={{
                  background: 'var(--td-brand-color)',
                  color: 'var(--td-text-color-anti)',
                  fontWeight: 800,
                }}
              >
                T
              </Avatar>
              <Typography.Title className="demo-card-title" level="h3">
                Hello, TDesign
              </Typography.Title>
              <Typography.Paragraph className="demo-card-copy" theme="secondary">
                点击按钮，体验这个模板中的基础交互。
              </Typography.Paragraph>
              <div className="counter" aria-label="计数器">
                <Button
                  className="demo-button"
                  theme="primary"
                  size="large"
                  shape="square"
                  aria-label="减少"
                  onClick={() => setCount(count - 1)}
                >
                  −
                </Button>
                <span className="count">{count}</span>
                <Button
                  className="demo-button"
                  theme="primary"
                  size="large"
                  shape="square"
                  aria-label="增加"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </Button>
              </div>
              <div className="hint">编辑首页文件并保存，查看热更新效果</div>
            </div>
          </div>
        </section>
        <section className="info-panel" aria-labelledby="info-title">
          <div className="info-head">
            <Typography.Title className="info-title" level="h2" id="info-title">
              技术信息
            </Typography.Title>
            <Typography.Paragraph className="info-subtitle" theme="secondary">
              当前模板使用的构建工具与组件库
            </Typography.Paragraph>
          </div>
          <CellGroup bordered={false} className="tech-cells">
            {techInfo.map((item) => (
              <Cell key={item.label} title={item.label} note={item.value} />
            ))}
          </CellGroup>
          <div className="resource-links">
            {resources.map((item) => (
              <Cell
                key={item.label}
                title={item.label}
                arrow
                hover
                onClick={() => openLink(item.href, !item.external)}
              />
            ))}
          </div>
        </section>
      </div>
      <footer className="starter-footer">
        <span>Powered by TDesign</span>
        <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
          组件文档 →
        </a>
      </footer>
    </main>
  )
}
