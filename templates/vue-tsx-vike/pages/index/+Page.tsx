import { computed, defineComponent, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import {
  Avatar as TAvatar,
  Badge as TBadge,
  Button as TButton,
  Card as TCard,
  Content as TContent,
  Footer as TFooter,
  Header as THeader,
  Descriptions as TDescriptions,
  DescriptionsItem as TDescriptionsItem,
  Divider as TDivider,
  Layout as TLayout,
  Link as TLink,
  Space as TSpace,
  Tag as TTag,
  Tooltip as TTooltip,
} from 'tdesign-vue-next'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/vue-next/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-vue-next'
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
  { label: '组件库', content: 'tdesign-vue-next' },
  { label: '开发语言', content: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: '/dependencies', external: false },
  { label: '组件文档', href: docsUrl, external: true },
]

export default defineComponent(() => {
  const theme = ref<Theme>(getInitialTheme())
  const isDark = computed(() => theme.value === 'dark')
  const logo = computed(() => (isDark.value ? logoDark : logoLight))
  const count = ref(0)
  const decrease = () => {
    count.value -= 1
  }
  const increase = () => {
    count.value += 1
  }

  applyTheme(theme.value)

  const toggleTheme = () => {
    theme.value = isDark.value ? 'light' : 'dark'
    window.localStorage.setItem(themeKey, theme.value)
    applyTheme(theme.value)
  }

  return () => (
    <TLayout class="starter-page">
      <THeader class="topbar">
        <div class="topbar-inner">
          <div class="brand">
            <img class="brand-logo" src={logo.value} alt="TDesign" />
            <TDivider class="brand-divider" layout="vertical" />
            <span class="brand-label">Project Starter</span>
          </div>
          <TSpace size={4}>
            <TTooltip content="Vue component documentation">
              <TButton
                tag="a"
                href={docsUrl}
                shape="circle"
                variant="text"
                aria-label="组件文档"
                {...({ target: '_blank', rel: 'noreferrer' } as object)}
              >
                <BookOpenIcon />
              </TButton>
            </TTooltip>
            <TTooltip content="TDesign Vue on GitHub">
              <TButton
                tag="a"
                href={githubUrl}
                shape="circle"
                variant="text"
                aria-label="GitHub"
                {...({ target: '_blank', rel: 'noreferrer' } as object)}
              >
                <LogoGithubIcon />
              </TButton>
            </TTooltip>
            <TTooltip content={isDark.value ? '切换为亮色主题' : '切换为暗色主题'}>
              <TButton
                shape="circle"
                variant="text"
                aria-label={isDark.value ? '切换为亮色主题' : '切换为暗色主题'}
                onClick={toggleTheme}
              >
                {isDark.value ? <SunnyIcon /> : <MoonIcon />}
              </TButton>
            </TTooltip>
          </TSpace>
        </div>
      </THeader>

      <TContent class="starter-content">
        <section class="intro">
          <div>
            <h1>__PROJECTNAME__</h1>
            <p>一个基于 TDesign 的简单交互示例。</p>
          </div>
          <TTag class="template-id" theme="primary" variant="light" size="large">
            __TEMPLATENAME__
          </TTag>
        </section>

        <div class="workspace">
          <TCard class="demo-panel" bordered>
            {{
              header: () => (
                <div class="demo-head">
                  <div class="demo-title">
                    <TBadge dot color="var(--td-success-color)" />
                    示例
                  </div>
                  <span class="demo-subtitle">交互示例</span>
                </div>
              ),
              default: () => (
                <div class="demo-stage">
                  <div class="demo-card">
                    <TAvatar class="demo-mark" size="54px" shape="round" style={{ background: 'var(--td-brand-color)', color: 'var(--td-text-color-anti)', fontWeight: 800 }}>T</TAvatar>
                    <h2>Hello, TDesign</h2>
                    <p>点击按钮，体验这个模板中的基础交互。</p>
                    <TSpace size={12} align="center">
                      <TButton theme="primary" size="large" shape="square" aria-label="减少" onClick={decrease}>−</TButton>
                      <TButton variant="outline" size="large" disabled>{count.value}</TButton>
                      <TButton theme="primary" size="large" shape="square" aria-label="增加" onClick={increase}>+</TButton>
                    </TSpace>
                    <div class="hint">编辑首页文件并保存，查看热更新效果</div>
                  </div>
                </div>
              ),
            }}
          </TCard>

          <TCard class="info-panel" bordered>
            {{
              title: () => <span class="info-title">技术信息</span>,
              subtitle: () => <span class="info-subtitle">当前模板使用的构建工具与组件库</span>,
              default: () => (
                <>
                  <TDescriptions column={1} bordered={false}>
                    {techInfo.map((item) => (
                      <TDescriptionsItem key={item.label} label={item.label}>
                        {item.content}
                      </TDescriptionsItem>
                    ))}
                  </TDescriptions>
                  <div class="resource-links">
                    {resources.map((item) => (
                      <TLink
                        class="resource-link"
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        {...({ rel: item.external ? 'noreferrer' : undefined } as object)}
                        hover="color"
                      >
                        <span>{item.label}</span>
                        <span class="resource-arrow">→</span>
                      </TLink>
                    ))}
                  </div>
                </>
              ),
            }}
          </TCard>
        </div>
      </TContent>

      <TFooter class="starter-footer">
        <span>Powered by TDesign</span>
        <TLink
          href="https://tdesign.tencent.com/"
          target="_blank"
          hover="color"
          {...({ rel: 'noreferrer' } as object)}
        >
          组件文档 →
        </TLink>
      </TFooter>
    </TLayout>
  )
})
