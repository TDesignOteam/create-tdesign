import { computed, defineComponent, onMounted, ref } from 'vue'
import { AppIcon, CodeIcon, ComponentGridIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import { Button as TButton, Cell as TCell, CellGroup as TCellGroup, Grid as TGrid, GridItem as TGridItem, Navbar as TNavbar, Typography, TypographyParagraph, TypographyText, TypographyTitle } from 'tdesign-mobile-vue'
import packageJson from '../../package.json'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import './Dependencies.css'

const STORAGE_KEY = 'tdesign-starter-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const totalDependencies = runtimeDependencies.length + developmentDependencies.length

export default defineComponent(() => {
  const isDark = ref(false)
  const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
  const applyTheme = (dark: boolean) => { isDark.value = dark; document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light') }
  const toggleTheme = () => { const nextDark = !isDark.value; applyTheme(nextDark); localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light') }
  const goHome = () => window.location.assign('/')
  onMounted(() => { const savedTheme = localStorage.getItem(STORAGE_KEY); applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) })
  const dependencySection = (title: string, dependencies: [string, string][]) => <section class="dependency-section" aria-label={title}><div class="dependency-heading"><TypographyTitle level="h2" content={title} /><span class="dependency-count"><TypographyText theme="secondary" content={`${dependencies.length} packages`} /></span></div><TCellGroup theme="card">{dependencies.map(([name, version]) => <TCell class="dependency-cell" key={name} title={() => <TypographyText content={name} strong />} note={() => <span class="dependency-version"><TypographyText content={version} code copyable={{ text: version }} /></span>} />)}</TCellGroup></section>
  return () => (
    <main class="page-shell dependencies-page">
      <TNavbar class="brand-navbar" fixed={false} left={() => <div class="brand-lockup"><img class="brand-logo" src={isDark.value ? logoDark : logoLight} alt="TDesign" /></div>} right={() => <button class="theme-button" type="button" aria-label={themeLabel.value} title={themeLabel.value} onClick={(event) => { event.stopPropagation(); toggleTheme() }}>{isDark.value ? <SunnyIcon size="20px" /> : <MoonIcon size="20px" />}</button>} />
      <section class="dependencies-hero"><div class="dependencies-width"><span class="dependencies-kicker"><Typography>Project manifest</Typography></span><TypographyTitle level="h1" content="Dependencies" /><div class="dependencies-copy"><TypographyParagraph content="Packages available in this starter, with the exact version ranges from package.json." /></div><TGrid class="dependencies-summary" column={3} border theme="card"><TGridItem image={() => <AppIcon size="24px" />} text={() => <TypographyTitle level="h3" content={`${runtimeDependencies.length}`} />} description={() => <TypographyText theme="secondary" content="Runtime" />} /><TGridItem image={() => <CodeIcon size="24px" />} text={() => <TypographyTitle level="h3" content={`${developmentDependencies.length}`} />} description={() => <TypographyText theme="secondary" content="Development" />} /><TGridItem image={() => <ComponentGridIcon size="24px" />} text={() => <TypographyTitle level="h3" content={`${totalDependencies}`} />} description={() => <TypographyText theme="secondary" content="Total" />} /></TGrid></div></section>
      <div class="dependencies-width dependencies-content">{dependencySection('Runtime dependencies', runtimeDependencies)}{dependencySection('Development dependencies', developmentDependencies)}<TButton class="dependencies-home" variant="outline" size="large" block onClick={goHome}>Back to home</TButton></div>
    </main>
  )
})
