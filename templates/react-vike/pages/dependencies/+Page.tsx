import { useEffect, useState } from 'react'
import {
  ArrowLeftIcon,
  ComponentGridIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-react'
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
import packageJson from '../../package.json'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'
import './Dependencies.css'

type Theme = 'light' | 'dark'

const themeKey = 'tdesign-starter-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(
  packageJson.devDependencies ?? {},
)
const dependencyGroups = [
  { title: 'Runtime dependencies', items: runtimeDependencies },
  { title: 'Development dependencies', items: developmentDependencies },
]
const summary = [
  {
    title: 'Total',
    value: runtimeDependencies.length + developmentDependencies.length,
  },
  { title: 'Runtime', value: runtimeDependencies.length },
  { title: 'Development', value: developmentDependencies.length },
]

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return
  if (theme === 'dark')
    document.documentElement.setAttribute('theme-mode', 'dark')
  else document.documentElement.removeAttribute('theme-mode')
}

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
    <Layout className="dependencies-page">
      <Layout.Header className="topbar">
        <Row className="topbar-inner" align="middle" justify="space-between">
          <a href="/" className="dependencies-brand" aria-label="Back to home">
            <img
              className="brand-logo"
              src={isDark ? logoDark : logoLight}
              alt="TDesign"
            />
          </a>
          <Space className="topbar-actions" size={4}>
            <Button tag="a" href="/" variant="text">
              <ArrowLeftIcon />
              Home
            </Button>
            <Tooltip
              content={
                isDark ? 'Switch to light theme' : 'Switch to dark theme'
              }
            >
              <Button
                shape="circle"
                variant="text"
                aria-label={
                  isDark ? 'Switch to light theme' : 'Switch to dark theme'
                }
                onClick={toggleTheme}
              >
                {isDark ? <SunnyIcon /> : <MoonIcon />}
              </Button>
            </Tooltip>
          </Space>
        </Row>
      </Layout.Header>

      <Layout.Content className="dependencies-workspace">
        <section aria-labelledby="dependencies-title">
          <Row className="dependencies-intro" align="bottom" justify="space-between">
            <Space direction="vertical" size="small">
              <Tag theme="primary" variant="light">
                Package manifest
              </Tag>
              <div id="dependencies-title">
                <Typography.Title level="h1">Dependencies</Typography.Title>
              </div>
              <Typography.Text theme="secondary">
                Packages declared by{' '}
                <Typography.Text code>{packageJson.name}</Typography.Text>, grouped
                by how they are used.
              </Typography.Text>
            </Space>
            <span className="dependencies-title-icon">
              <ComponentGridIcon />
            </span>
          </Row>
        </section>

        <section className="dependencies-summary" aria-label="Dependency summary">
          <Row gutter={[16, 16]}>
            {summary.map((item) => (
              <Col key={item.title} xs={12} sm={4}>
                <Card bordered>
                  <Statistic title={item.title} value={item.value} />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section aria-label="Dependency lists">
          <Row align="top" gutter={[16, 16]}>
            {dependencyGroups.map((group) => (
              <Col key={group.title} xs={12} sm={6}>
                <Card
                  className="dependencies-card"
                  title={<Typography.Text strong>{group.title}</Typography.Text>}
                  actions={<Tag variant="light">{group.items.length} packages</Tag>}
                  bordered
                  headerBordered
                >
                  <List split>
                    {group.items.map(([name, version]) => (
                      <List.ListItem
                        key={name}
                        action={
                          <Typography.Text code copyable={{ text: version }}>
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
        </section>
      </Layout.Content>
    </Layout>
  )
}
