import { useEffect, useState } from 'react'
import { AppIcon, CodeIcon, ComponentGridIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import { Button, Cell, CellGroup, Grid, GridItem, Navbar, Typography } from 'tdesign-mobile-react'
import packageJson from '../../package.json'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import './Dependencies.css'

const STORAGE_KEY = 'tdesign-starter-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const totalDependencies = runtimeDependencies.length + developmentDependencies.length

export default function DependenciesPage() {
  const [isDark, setIsDark] = useState(false)
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
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    applyTheme(
      savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches,
    )
  }, [])
  const dependencySection = (title: string, dependencies: [string, string][]) => (
    <section className="dependency-section" aria-label={title}>
      <div className="dependency-heading">
        <Typography.Title level="h2">{title}</Typography.Title>
        <Typography.Text theme="secondary">{dependencies.length} packages</Typography.Text>
      </div>
      <CellGroup theme="card">
        {dependencies.map(([name, version]) => (
          <Cell
            className="dependency-cell"
            key={name}
            title={<Typography.Text strong>{name}</Typography.Text>}
            note={
              <span className="dependency-version">
                <Typography.Text code copyable={{ text: version }}>
                  {version}
                </Typography.Text>
              </span>
            }
          />
        ))}
      </CellGroup>
    </section>
  )
  return (
    <main className="page-shell dependencies-page">
      <Navbar
        className="brand-navbar"
        fixed={false}
        left={
          <div className="brand-lockup">
            <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
          </div>
        }
        right={
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
        }
      />
      <section className="dependencies-hero">
        <div className="dependencies-width">
          <Typography.Text className="dependencies-kicker" theme="primary">
            Project manifest
          </Typography.Text>
          <Typography.Title level="h1">Dependencies</Typography.Title>
          <Typography.Paragraph className="dependencies-copy">
            Packages available in this starter, with the exact version ranges from package.json.
          </Typography.Paragraph>
          <Grid className="dependencies-summary" column={3} border theme="card">
            <GridItem
              image={<AppIcon size="24px" />}
              text={<Typography.Title level="h3">{runtimeDependencies.length}</Typography.Title>}
              description={<Typography.Text theme="secondary">Runtime</Typography.Text>}
            />
            <GridItem
              image={<CodeIcon size="24px" />}
              text={
                <Typography.Title level="h3">{developmentDependencies.length}</Typography.Title>
              }
              description={<Typography.Text theme="secondary">Development</Typography.Text>}
            />
            <GridItem
              image={<ComponentGridIcon size="24px" />}
              text={<Typography.Title level="h3">{totalDependencies}</Typography.Title>}
              description={<Typography.Text theme="secondary">Total</Typography.Text>}
            />
          </Grid>
        </div>
      </section>
      <div className="dependencies-width dependencies-content">
        {dependencySection('Runtime dependencies', runtimeDependencies)}
        {dependencySection('Development dependencies', developmentDependencies)}
        <Button
          className="dependencies-home"
          variant="outline"
          size="large"
          block
          onClick={() => window.location.assign('/')}
        >
          Back to home
        </Button>
      </div>
    </main>
  )
}
