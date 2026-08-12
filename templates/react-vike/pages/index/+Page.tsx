import { useEffect, useState } from 'react'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import {
  Avatar,
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
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/react/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-react'
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

const techInfo = [
  { label: '构建工具', content: 'Vike' },
  { label: '组件库', content: 'tdesign-react' },
  { label: '开发语言', content: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: '/dependencies', external: false },
  { label: '组件文档', href: docsUrl, external: true },
]

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [count, setCount] = useState(0)
  const decrease = () => {
    setCount((c) => c - 1)
  }
  const increase = () => {
    setCount((c) => c + 1)
  }
  const isDark = theme === 'dark'

  useEffect(() => applyTheme(theme), [theme])

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem(themeKey, nextTheme)
  }

  return (
    <Layout className="starter-page">
      <Layout.Header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
            <Divider className="brand-divider" layout="vertical" />
            <span className="brand-label">Project Starter</span>
          </div>
          <Space size={4}>
            <Tooltip content="React component documentation">
              <Button
                tag="a"
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                shape="circle"
                variant="text"
                aria-label="组件文档"
              >
                <BookOpenIcon />
              </Button>
            </Tooltip>
            <Tooltip content="TDesign React on GitHub">
              <Button
                tag="a"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                shape="circle"
                variant="text"
                aria-label="GitHub"
              >
                <LogoGithubIcon />
              </Button>
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
            <p>一个基于 TDesign 的简单交互示例。</p>
          </div>
          <Tag className="template-id" theme="primary" variant="light" size="large">
            __TEMPLATENAME__
          </Tag>
        </section>

        <div className="workspace">
          <Card
            className="demo-panel"
            bordered
            header={
              <div className="demo-head">
                <div className="demo-title">
                  <Badge dot color="var(--td-success-color)" />
                  示例
                </div>
                <span className="demo-subtitle">交互示例</span>
              </div>
            }
          >
            <div className="demo-stage">
              <div className="demo-card">
                <Avatar className="demo-mark" size="54px" shape="round" style={{ background: 'var(--td-brand-color)', color: 'var(--td-text-color-anti)', fontWeight: 800 }}>T</Avatar>
                <h2>Hello, TDesign</h2>
                <p>点击按钮，体验这个模板中的基础交互。</p>
                <Space size={12} align="center">
                  <Button theme="primary" size="large" shape="square" aria-label="减少" onClick={decrease}>−</Button>
                  <Button variant="outline" size="large" disabled>{count}</Button>
                  <Button theme="primary" size="large" shape="square" aria-label="增加" onClick={increase}>+</Button>
                </Space>
                <div className="hint">编辑首页文件并保存，查看热更新效果</div>
              </div>
            </div>
          </Card>

          <Card
            className="info-panel"
            bordered
            title={<span className="info-title">技术信息</span>}
            subtitle={<span className="info-subtitle">当前模板使用的构建工具与组件库</span>}
          >
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
