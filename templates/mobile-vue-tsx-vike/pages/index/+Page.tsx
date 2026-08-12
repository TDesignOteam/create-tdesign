import { computed, defineComponent, onMounted, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import {
  Avatar as TAvatar,
  Badge as TBadge,
  Button as TButton,
  Cell as TCell,
  CellGroup as TCellGroup,
  Navbar as TNavbar,
  Tag as TTag,
} from 'tdesign-mobile-vue'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const docsUrl = 'https://tdesign.tencent.com/mobile-vue/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-mobile-vue'

const techInfo = [
  { label: '构建工具', value: 'Vike' },
  { label: '组件库', value: 'tdesign-mobile-vue' },
  { label: '开发语言', value: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: '/dependencies' },
  { label: '组件文档', href: docsUrl, external: true },
]

export default defineComponent(() => {
  const isDark = ref(false)
  const themeLabel = computed(() =>
    isDark.value ? 'Switch to light theme' : 'Switch to dark theme',
  )
  const logo = computed(() => (isDark.value ? logoDark : logoLight))
  const count = ref(0)
  const decrease = () => {
    count.value -= 1
  }
  const increase = () => {
    count.value += 1
  }

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
          <div class="navbar-actions">
            <a
              class="icon-button"
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="组件文档"
              title="组件文档"
            >
              <BookOpenIcon size="20px" />
            </a>
            <a
              class="icon-button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <LogoGithubIcon size="20px" />
            </a>
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
          </div>
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
        <section class="demo-panel" aria-label="交互示例">
          <div class="demo-head">
            <div class="demo-title">
              <TBadge dot color="var(--td-success-color)" />
              示例
            </div>
            <span class="demo-subtitle">交互示例</span>
          </div>
          <div class="demo-stage">
            <div class="demo-card">
              <TAvatar
                class="demo-mark"
                size="52px"
                shape="round"
                style={{
                  background: 'var(--td-brand-color)',
                  color: 'var(--td-text-color-anti)',
                  fontWeight: 800,
                }}
              >
                T
              </TAvatar>
              <h2>Hello, TDesign</h2>
              <p>点击按钮，体验这个模板中的基础交互。</p>
              <div class="counter" aria-label="计数器">
                <TButton
                  class="demo-button"
                  theme="primary"
                  size="large"
                  shape="square"
                  aria-label="减少"
                  onClick={decrease}
                >
                  −
                </TButton>
                <span class="count">{count.value}</span>
                <TButton
                  class="demo-button"
                  theme="primary"
                  size="large"
                  shape="square"
                  aria-label="增加"
                  onClick={increase}
                >
                  +
                </TButton>
              </div>
              <div class="hint">编辑首页文件并保存，查看热更新效果</div>
            </div>
          </div>
        </section>
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
