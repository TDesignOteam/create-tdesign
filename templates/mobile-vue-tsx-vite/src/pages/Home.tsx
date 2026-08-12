import { computed, defineComponent, onMounted, ref } from 'vue'
import { MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import {
  Cell as TCell,
  CellGroup as TCellGroup,
  Navbar as TNavbar,
  Tag as TTag,
} from 'tdesign-mobile-vue'
import Demo from './Demo'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'

const docsUrl = 'https://tdesign.tencent.com/mobile-vue/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-mobile-vue'

const techInfo = [
  { label: '构建工具', value: 'Vite' },
  { label: '组件库', value: 'tdesign-mobile-vue' },
  { label: '开发语言', value: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: './dependencies' },
  { label: '组件文档', href: docsUrl, external: true },
]

export default defineComponent(() => {
  const isDark = ref(false)
  const themeLabel = computed(() =>
    isDark.value ? 'Switch to light theme' : 'Switch to dark theme',
  )
  const logo = computed(() => (isDark.value ? logoDark : logoLight))

  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light')
  }
  const toggleTheme = () => {
    const nextDark = !isDark.value
    applyTheme(nextDark)
    localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light')
  }
  const openLink = (url: string, internal = false) => {
    if (internal) {
      window.location.assign(url)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    applyTheme(
      savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches,
    )
  })

  return () => (
    <main class="page-shell">
      <TNavbar
        class="brand-navbar"
        fixed={false}
        left={() => (
          <div class="brand-lockup">
            <img class="brand-logo" src={logo.value} alt="TDesign" />
            <TTag class="template-tag" theme="primary" variant="light">
              __TEMPLATENAME__
            </TTag>
          </div>
        )}
        right={() => (
          <button
            class="theme-button"
            type="button"
            aria-label={themeLabel.value}
            title={themeLabel.value}
            onClick={(event) => {
              event.stopPropagation()
              toggleTheme()
            }}
          >
            {isDark.value ? <SunnyIcon size="20px" /> : <MoonIcon size="20px" />}
          </button>
        )}
      />
      <section class="intro-band">
        <div class="content-width intro-content">
          <div>
            <h1>__PROJECTNAME__</h1>
            <p class="intro-copy">一个基于 TDesign 的简单交互示例。</p>
          </div>
          <TTag class="template-id" theme="primary" variant="light">
            __TEMPLATENAME__
          </TTag>
        </div>
      </section>
      <div class="content-width workspace">
        <Demo />
        <section class="info-panel" aria-labelledby="info-title">
          <div class="info-head">
            <h2 id="info-title">技术信息</h2>
            <p class="info-subtitle">当前模板使用的构建工具与组件库</p>
          </div>
          <TCellGroup bordered={false} class="tech-cells">
            {techInfo.map((item) => (
              <TCell key={item.label} title={item.label} note={item.value} />
            ))}
          </TCellGroup>
          <div class="resource-links">
            {resources.map((item) => (
              <TCell
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
      <footer class="starter-footer">
        <span>Powered by TDesign</span>
        <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
          组件文档 →
        </a>
      </footer>
    </main>
  )
})
