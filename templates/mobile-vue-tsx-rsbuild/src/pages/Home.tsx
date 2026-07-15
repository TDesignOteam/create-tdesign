import { computed, defineComponent, onMounted, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import { Button as TButton, Cell as TCell, CellGroup as TCellGroup, Navbar as TNavbar, Tag as TTag } from 'tdesign-mobile-vue'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const resources = [
  { title: 'Mobile Vue documentation', description: 'Components, design guidance, and API reference', url: 'https://tdesign.tencent.com/mobile-vue/overview' },
  { title: 'TDesign Mobile Vue on GitHub', description: 'Source code, releases, and issue tracker', url: 'https://github.com/Tencent/tdesign-mobile-vue' },
  { title: 'Dependencies', description: 'Review runtime and development package versions', url: '/dependencies', internal: true },
]
export default defineComponent(() => {
  const isDark = ref(false)
  const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
  const applyTheme = (dark: boolean) => { isDark.value = dark; document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light') }
  const toggleTheme = () => { const nextDark = !isDark.value; applyTheme(nextDark); localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light') }
  const openLink = (url: string, internal = false) => { if (internal) { window.location.assign(url); return } window.open(url, '_blank', 'noopener,noreferrer') }
  onMounted(() => { const savedTheme = localStorage.getItem(STORAGE_KEY); applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) })
  return () => (
    <main class="page-shell">
      <TNavbar class="brand-navbar" fixed={false} left={() => <div class="brand-lockup"><img class="brand-logo" src={isDark.value ? logoDark : logoLight} alt="TDesign" /><TTag class="template-tag" theme="primary" variant="light">__TEMPLATENAME__</TTag></div>} right={() => <button class="theme-button" type="button" aria-label={themeLabel.value} title={themeLabel.value} onClick={(event) => { event.stopPropagation(); toggleTheme() }}>{isDark.value ? <SunnyIcon size="20px" /> : <MoonIcon size="20px" />}</button>} />
      <section class="intro-band"><div class="content-width intro-content"><div><p class="overline">Mobile starter workspace</p><h1>__PROJECTNAME__</h1><p class="intro-copy">A compact Vue 3 and TSX workspace with TDesign Mobile components and production-ready defaults.</p></div><TTag theme="success" variant="light">Ready</TTag></div></section>
      <div class="content-width workspace">
        <section class="workspace-section" aria-labelledby="overview-title"><div class="section-title-row"><div><p class="section-kicker">Overview</p><h2 id="overview-title">Project status</h2></div><span class="status-dot">Configured</span></div><TCellGroup theme="card"><TCell title="UI foundation" description="Vue 3 + TSX + TypeScript + TDesign Mobile Vue" note="Active" /><TCell title="Template" description="__TEMPLATENAME__" note="Mobile" /></TCellGroup></section>
        <section class="workspace-section" aria-labelledby="command-title"><div class="section-title-row"><div><p class="section-kicker">Quick start</p><h2 id="command-title">Development command</h2></div></div><div class="command-row"><code>__DEVCOMMAND__</code><TTag theme="success" variant="light-outline">Local</TTag></div></section>
        <section class="workspace-section" aria-labelledby="resources-title"><div class="section-title-row"><div><p class="section-kicker">Resources</p><h2 id="resources-title">Build from here</h2></div></div><TCellGroup theme="card">{resources.map((item) => <TCell key={item.url} title={item.title} description={item.description} arrow hover onClick={() => openLink(item.url, item.internal)} />)}</TCellGroup></section>
        <div class="actions"><TButton theme="primary" size="large" block icon={() => <BookOpenIcon />} onClick={() => openLink(resources[0].url)}>Open documentation</TButton><TButton variant="outline" size="large" block icon={() => <LogoGithubIcon />} onClick={() => openLink(resources[1].url)}>View on GitHub</TButton></div>
      </div>
    </main>
  )
})
