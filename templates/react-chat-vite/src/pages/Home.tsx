import { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Card,
  Descriptions,
  Divider,
  Layout,
  Link,
  Space,
  Tag,
  Tooltip,
} from 'tdesign-react'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import Demo from './Demo'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/chat/getting-started'
const githubUrl = 'https://github.com/Tencent/tdesign'
const themeKey = 'tdesign-chat-theme'

const techInfo = [
  { label: '构建工具', content: 'Vite' },
  { label: '组件库', content: 'tdesign-react' },
  { label: '开发语言', content: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: './dependencies', external: false },
  { label: '组件文档', href: docsUrl, external: true },
]

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>('light')
  const isDark = theme === 'dark'

  const applyTheme = (value: Theme) => {
    setTheme(value)
    document.documentElement.setAttribute('theme-mode', value)
  }

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    localStorage.setItem(themeKey, nextTheme)
    applyTheme(nextTheme)
  }

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem(themeKey)
    const initialTheme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : colorScheme.matches
          ? 'dark'
          : 'light'
    applyTheme(initialTheme)

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(themeKey)) applyTheme(event.matches ? 'dark' : 'light')
    }

    colorScheme.addEventListener('change', syncSystemTheme)
    return () => colorScheme.removeEventListener('change', syncSystemTheme)
  }, [])

  return (
    <Layout className="starter-page">
      <Layout.Header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
            <Divider className="brand-divider" layout="vertical" />
            <span className="brand-label">AI Chat Starter</span>
          </div>
          <Space size={4}>
            <Tooltip content="组件文档">
              <a
                className="icon-link"
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="组件文档"
              >
                <BookOpenIcon />
              </a>
            </Tooltip>
            <Tooltip content="TDesign on GitHub">
              <a
                className="icon-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <LogoGithubIcon />
              </a>
            </Tooltip>
            <Tooltip content={isDark ? '切换为亮色主题' : '切换为暗色主题'}>
              <Button
                shape="circle"
                variant="text"
                aria-label={isDark ? '切换为亮色主题' : '切换为暗色主题'}
                onClick={toggleTheme}
              >
                {isDark ? <SunnyIcon /> : <MoonIcon />}
              </Button>
            </Tooltip>
          </Space>
        </div>
      </Layout.Header>

      <Layout.Content className="starter-content">
        <section className="intro">
          <div>
            <h1>__PROJECTNAME__</h1>
            <p>一个基于 TDesign Chat 的流式对话示例。</p>
          </div>
          <Tag className="template-id" theme="primary" variant="light" size="large">
            __TEMPLATENAME__
          </Tag>
        </section>

        <div className="workspace">
          <section className="chat-panel" aria-label="AI chat workspace">
            <div className="chat-panel-heading">
              <div>
                <Badge dot color="var(--td-success-color)" />
                Assistant
              </div>
              <span>Streaming ready</span>
            </div>
            <Demo />
          </section>

          <Card className="info-panel" bordered>
            <div className="info-head">
              <div className="info-title">技术信息</div>
              <div className="info-subtitle">当前模板使用的构建工具与组件库</div>
            </div>
            <Descriptions column={1} bordered={false}>
              {techInfo.map((item) => (
                <Descriptions.DescriptionsItem key={item.label} label={item.label}>
                  {item.content}
                </Descriptions.DescriptionsItem>
              ))}
            </Descriptions>
            <div className="resource-links">
              {resources.map((item) => (
                <Link
                  className="resource-link"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  {...({ rel: item.external ? 'noreferrer' : undefined } as object)}
                  hover="color"
                  key={item.label}
                >
                  <span>{item.label}</span>
                  <span className="resource-arrow">→</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Layout.Content>

      <Layout.Footer className="starter-footer">
        <span>Powered by TDesign</span>
        <Link
          href="https://tdesign.tencent.com/"
          target="_blank"
          hover="color"
          {...({ rel: 'noreferrer' } as object)}
        >
          组件文档 →
        </Link>
      </Layout.Footer>
    </Layout>
  )
}
