import { computed, defineComponent, onMounted, ref } from 'vue'
import { ArrowLeftIcon, ComponentGridIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import {
  Button as TButton,
  Card as TCard,
  Col as TCol,
  Content as TContent,
  Header as THeader,
  Layout as TLayout,
  List as TList,
  ListItem as TListItem,
  Row as TRow,
  Space as TSpace,
  Statistic as TStatistic,
  Tag as TTag,
  Text as TypographyText,
  Title as TypographyTitle,
  Tooltip as TTooltip,
} from 'tdesign-vue-next'
import packageJson from '../../package.json'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'
import './Dependencies.css'

type Theme = 'light' | 'dark'

const themeKey = 'tdesign-starter-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
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
  if (theme === 'dark') document.documentElement.setAttribute('theme-mode', 'dark')
  else document.documentElement.removeAttribute('theme-mode')
}

export default defineComponent(() => {
  const theme = ref<Theme>('light')
  const isDark = computed(() => theme.value === 'dark')
  const logo = computed(() => (isDark.value ? logoDark : logoLight))

  onMounted(() => {
    const savedTheme = window.localStorage.getItem(themeKey)
    theme.value =
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    applyTheme(theme.value)
  })

  const toggleTheme = () => {
    theme.value = isDark.value ? 'light' : 'dark'
    window.localStorage.setItem(themeKey, theme.value)
    applyTheme(theme.value)
  }

  return () => (
    <TLayout class="dependencies-page">
      <THeader class="topbar">
        <TRow class="topbar-inner" align="middle" justify="space-between">
          <a href="/" class="dependencies-brand" aria-label="Back to home">
            <img class="brand-logo" src={logo.value} alt="TDesign" />
          </a>
          <TSpace class="topbar-actions" size={4}>
            <TButton tag="a" href="/" variant="text">
              <ArrowLeftIcon />
              Home
            </TButton>
            <TTooltip content={isDark.value ? 'Switch to light theme' : 'Switch to dark theme'}>
              <TButton
                shape="circle"
                variant="text"
                aria-label={isDark.value ? 'Switch to light theme' : 'Switch to dark theme'}
                onClick={toggleTheme}
              >
                {isDark.value ? <SunnyIcon /> : <MoonIcon />}
              </TButton>
            </TTooltip>
          </TSpace>
        </TRow>
      </THeader>

      <TContent class="dependencies-workspace">
        <section aria-labelledby="dependencies-title">
          <TRow class="dependencies-intro" align="bottom" justify="space-between">
            <TSpace direction="vertical" size="small">
              <TTag theme="primary" variant="light">
                Package manifest
              </TTag>
              <div id="dependencies-title">
                <TypographyTitle level="h1">Dependencies</TypographyTitle>
              </div>
              <TypographyText theme="secondary">
                Packages declared by <TypographyText code>{packageJson.name}</TypographyText>,
                grouped by how they are used.
              </TypographyText>
            </TSpace>
            <span class="dependencies-title-icon">
              <ComponentGridIcon />
            </span>
          </TRow>
        </section>

        <section class="dependencies-summary" aria-label="Dependency summary">
          <TRow gutter={[16, 16]}>
            {summary.map((item) => (
              <TCol key={item.title} xs={12} sm={4}>
                <TCard bordered>
                  <TStatistic title={item.title} value={item.value} />
                </TCard>
              </TCol>
            ))}
          </TRow>
        </section>

        <section aria-label="Dependency lists">
          <TRow align="top" gutter={[16, 16]}>
            {dependencyGroups.map((group) => (
              <TCol key={group.title} xs={12} sm={6}>
                <TCard
                  class="dependencies-card"
                  title={() => <TypographyText strong>{group.title}</TypographyText>}
                  actions={() => <TTag variant="light">{group.items.length} packages</TTag>}
                  bordered
                  headerBordered
                >
                  <TList split>
                    {group.items.map(([name, version]) => (
                      <TListItem
                        key={name}
                        action={() => (
                          <TypographyText code copyable={{ text: version }}>
                            {version}
                          </TypographyText>
                        )}
                      >
                        <TypographyText class="dependency-name" strong>
                          {name}
                        </TypographyText>
                      </TListItem>
                    ))}
                  </TList>
                </TCard>
              </TCol>
            ))}
          </TRow>
        </section>
      </TContent>
    </TLayout>
  )
})
