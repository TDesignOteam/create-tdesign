import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import {
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
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import 'tdesign-vue-next/es/style/index.css'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'
import ClientOnlyChat from './ClientOnlyChat.vue'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/chat/getting-started'
const githubUrl = 'https://github.com/Tencent/tdesign'
const themeKey = 'tdesign-chat-theme'

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
  const theme = ref<Theme>('light')
  const isDark = computed(() => theme.value === 'dark')
  const logo = computed(() => (isDark.value ? logoDark : logoLight))
  let colorScheme: MediaQueryList | undefined

  const applyTheme = (value: Theme) => {
    theme.value = value
    document.documentElement.setAttribute('theme-mode', value)
  }

  const syncSystemTheme = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem(themeKey)) applyTheme(event.matches ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const nextTheme = isDark.value ? 'light' : 'dark'
    localStorage.setItem(themeKey, nextTheme)
    applyTheme(nextTheme)
  }

  onMounted(() => {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem(themeKey)
    applyTheme(
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : colorScheme.matches
          ? 'dark'
          : 'light',
    )
    colorScheme.addEventListener('change', syncSystemTheme)
  })

  onBeforeUnmount(() => colorScheme?.removeEventListener('change', syncSystemTheme))

  return () => (
    <TLayout class="starter-page">
      <THeader class="topbar">
        <div class="topbar-inner">
          <div class="brand">
            <img class="brand-logo" src={logo.value} alt="TDesign" />
            <TDivider class="brand-divider" layout="vertical" />
            <span class="brand-label">AI Chat Starter</span>
          </div>
          <TSpace size={4}>
            <TTooltip content="组件文档">
              <a
                class="icon-link"
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="组件文档"
              >
                <BookOpenIcon />
              </a>
            </TTooltip>
            <TTooltip content="TDesign on GitHub">
              <a
                class="icon-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <LogoGithubIcon />
              </a>
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
            <p>一个基于 TDesign Chat 的流式对话示例。</p>
          </div>
          <TTag class="template-id" theme="primary" variant="light" size="large">
            __TEMPLATENAME__
          </TTag>
        </section>

        <div class="workspace">
          <section class="chat-panel" aria-label="AI chat workspace">
            <div class="chat-panel-heading">
              <div>
                <TBadge dot color="var(--starter-green)" />
                Assistant
              </div>
              <span>Streaming ready</span>
            </div>
            <ClientOnlyChat />
          </section>

          <TCard class="info-panel" bordered>
            {{
              title: () => <span class="info-title">技术信息</span>,
              subtitle: () => <span class="info-subtitle">当前模板使用的构建工具与组件库</span>,
              default: () => (
                <div>
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
                </div>
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
