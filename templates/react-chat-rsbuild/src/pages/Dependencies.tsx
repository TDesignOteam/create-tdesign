import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Layout,
  List,
  Row,
  Space,
  Statistic,
  Tag,
  Tooltip,
  Typography,
} from 'tdesign-react'
import { ArrowLeftIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'
import packageJson from '../../package.json'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import './Dependencies.css'

type ThemeMode = 'light' | 'dark'
type Dependency = [string, string]

const THEME_KEY = 'tdesign-chat-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const dependencyGroups: { title: string; items: Dependency[] }[] = [
  { title: 'Runtime dependencies', items: runtimeDependencies },
  { title: 'Development dependencies', items: developmentDependencies },
]

export default function DependenciesPage() {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const isDark = theme === 'dark'

  const applyTheme = (value: ThemeMode) => {
    setTheme(value)
    document.documentElement.setAttribute('theme-mode', value)
  }

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem(THEME_KEY)
    applyTheme(
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : colorScheme.matches
          ? 'dark'
          : 'light',
    )

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(event.matches ? 'dark' : 'light')
    }

    colorScheme.addEventListener('change', syncSystemTheme)
    return () => colorScheme.removeEventListener('change', syncSystemTheme)
  }, [])

  const themeLabel = isDark ? 'Use light theme' : 'Use dark theme'

  return (
    <Layout className="dependencies-layout">
      <Layout.Header className="dependencies-header">
        <Row className="dependencies-header-inner" align="middle" justify="space-between">
          <Col>
            <Button
              className="dependencies-brand"
              tag="a"
              href="/"
              variant="text"
              aria-label="Back to Chat home"
            >
              <Space align="center" size={12}>
                <img
                  className="dependencies-logo"
                  src={isDark ? logoDark : logoLight}
                  alt="TDesign"
                />
                <Typography.Text className="dependencies-brand-name" strong>
                  Chat Dependencies
                </Typography.Text>
              </Space>
            </Button>
          </Col>
          <Col>
            <Space align="center" size={4}>
              <Button tag="a" href="/" variant="text" icon={<ArrowLeftIcon />}>
                Home
              </Button>
              <Tooltip content={themeLabel}>
                <Button shape="circle" variant="text" aria-label={themeLabel} onClick={toggleTheme}>
                  {isDark ? <SunnyIcon /> : <MoonIcon />}
                </Button>
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </Layout.Header>

      <Layout.Content className="dependencies-content">
        <div className="dependencies-content-inner">
          <Space className="dependencies-stack" direction="vertical" size={32}>
            <Space direction="vertical" size={8}>
              <Tag theme="primary" variant="light">
                Chat package manifest
              </Tag>
              <Typography.Title className="dependencies-title" level="h1">
                Dependencies
              </Typography.Title>
              <Typography.Paragraph className="dependencies-description">
                Packages declared by <Typography.Text code>{packageJson.name}</Typography.Text>,
                grouped by how they are used.
              </Typography.Paragraph>
            </Space>

            <Row gutter={[16, 16]} aria-label="Dependency summary">
              <Col xs={12} sm={4}>
                <Statistic
                  title="Total"
                  value={runtimeDependencies.length + developmentDependencies.length}
                />
              </Col>
              <Col xs={12} sm={4}>
                <Statistic title="Runtime" value={runtimeDependencies.length} />
              </Col>
              <Col xs={12} sm={4}>
                <Statistic title="Development" value={developmentDependencies.length} />
              </Col>
            </Row>

            <Row gutter={[20, 20]} align="start">
              {dependencyGroups.map((group) => (
                <Col key={group.title} xs={12} md={6}>
                  <Card
                    className="dependencies-card"
                    title={group.title}
                    actions={<Tag variant="light">{group.items.length} packages</Tag>}
                    headerBordered
                  >
                    <List split>
                      {group.items.map(([name, version]) => (
                        <List.ListItem
                          key={name}
                          action={
                            <Typography.Text className="dependency-version" code copyable>
                              {version}
                            </Typography.Text>
                          }
                        >
                          <Typography.Text className="dependency-name" strong>
                            {name}
                          </Typography.Text>
                        </List.ListItem>
                      ))}
                    </List>
                  </Card>
                </Col>
              ))}
            </Row>
          </Space>
        </div>
      </Layout.Content>
    </Layout>
  )
}
