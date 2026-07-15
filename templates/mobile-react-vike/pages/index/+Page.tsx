import { useEffect, useState } from 'react'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-react'
import { Button, Cell, CellGroup, Navbar, Tag } from 'tdesign-mobile-react'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const resources = [
  { title: 'Mobile React documentation', description: 'Components, design guidance, and API reference', url: 'https://tdesign.tencent.com/mobile-react/overview' },
  { title: 'TDesign Mobile React on GitHub', description: 'Source code, releases, and issue tracker', url: 'https://github.com/Tencent/tdesign-mobile-react' },
]
export default function Page() {
  const [isDark, setIsDark] = useState(false)
  const themeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme'
  function applyTheme(dark: boolean) { setIsDark(dark); document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light') }
  function toggleTheme() { const nextDark = !isDark; applyTheme(nextDark); localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light') }
  function openLink(url: string) { window.open(url, '_blank', 'noopener,noreferrer') }
  useEffect(() => { const savedTheme = localStorage.getItem(STORAGE_KEY); applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) }, [])
  return (
    <main className="page-shell">
      <Navbar className="brand-navbar" fixed={false} left={<div className="brand-lockup"><img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" /><Tag className="template-tag" theme="primary" variant="light">__TEMPLATENAME__</Tag></div>} right={<button className="theme-button" type="button" aria-label={themeLabel} title={themeLabel} onClick={(event) => { event.stopPropagation(); toggleTheme() }}>{isDark ? <SunnyIcon size="20px" /> : <MoonIcon size="20px" />}</button>} />
      <section className="intro-band"><div className="content-width intro-content"><div><p className="overline">Mobile starter workspace</p><h1>__PROJECTNAME__</h1><p className="intro-copy">A compact React and Vike workspace with TDesign Mobile components and SSR-ready defaults.</p></div><Tag theme="success" variant="light">Ready</Tag></div></section>
      <div className="content-width workspace">
        <section className="workspace-section" aria-labelledby="overview-title"><div className="section-title-row"><div><p className="section-kicker">Overview</p><h2 id="overview-title">Project status</h2></div><span className="status-dot">Configured</span></div><CellGroup theme="card"><Cell title="UI foundation" description="React + TypeScript + Vike + TDesign Mobile React" note="Active" /><Cell title="Template" description="__TEMPLATENAME__" note="Mobile" /></CellGroup></section>
        <section className="workspace-section" aria-labelledby="command-title"><div className="section-title-row"><div><p className="section-kicker">Quick start</p><h2 id="command-title">Development command</h2></div></div><div className="command-row"><code>__DEVCOMMAND__</code><Tag theme="success" variant="light-outline">Local</Tag></div></section>
        <section className="workspace-section" aria-labelledby="resources-title"><div className="section-title-row"><div><p className="section-kicker">Resources</p><h2 id="resources-title">Build from here</h2></div></div><CellGroup theme="card">{resources.map((item) => <Cell key={item.url} title={item.title} description={item.description} arrow hover onClick={() => openLink(item.url)} />)}</CellGroup></section>
        <div className="actions"><Button theme="primary" size="large" block icon={<BookOpenIcon />} onClick={() => openLink(resources[0].url)}>Open documentation</Button><Button variant="outline" size="large" block icon={<LogoGithubIcon />} onClick={() => openLink(resources[1].url)}>View on GitHub</Button></div>
      </div>
    </main>
  )
}
