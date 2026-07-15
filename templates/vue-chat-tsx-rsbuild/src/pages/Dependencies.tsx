import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Button as TButton,
  Card as TCard,
  Col as TCol,
  Content as TContent,
  Header as THeader,
  Layout as TLayout,
  List as TList,
  ListItem as TListItem,
  Paragraph as TypographyParagraph,
  Row as TRow,
  Space as TSpace,
  Statistic as TStatistic,
  Tag as TTag,
  Text as TypographyText,
  Title as TypographyTitle,
  Tooltip as TTooltip,
} from 'tdesign-vue-next'
import { ArrowLeftIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import 'tdesign-vue-next/es/style/index.css'
import packageJson from '../../package.json'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import './Dependencies.css'

type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'tdesign-chat-theme'
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const dependencyGroups = [
  { title: 'Runtime dependencies', items: runtimeDependencies },
  { title: 'Development dependencies', items: developmentDependencies },
]

export default defineComponent(() => {
  const theme = ref<ThemeMode>('light')
  const isDark = computed(() => theme.value === 'dark')
  let colorScheme: MediaQueryList | undefined

  const applyTheme = (value: ThemeMode) => {
    theme.value = value
    document.documentElement.setAttribute('theme-mode', value)
  }

  const syncSystemTheme = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem(THEME_KEY)) applyTheme(event.matches ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const nextTheme = isDark.value ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  onMounted(() => {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem(THEME_KEY)
    applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : colorScheme.matches ? 'dark' : 'light')
    colorScheme.addEventListener('change', syncSystemTheme)
  })

  onBeforeUnmount(() => colorScheme?.removeEventListener('change', syncSystemTheme))

  return () => (
    <TLayout class="dependencies-layout">
      <THeader class="dependencies-header">
        <TRow class="dependencies-header-inner" align="middle" justify="space-between">
          <TCol>
            <TButton class="dependencies-brand" tag="a" href="/" variant="text" aria-label="Back to Chat home">
              <TSpace align="center" size={12}>
                <img class="dependencies-logo" src={isDark.value ? logoDark : logoLight} alt="TDesign" />
                <TypographyText class="dependencies-brand-name" strong>Chat Dependencies</TypographyText>
              </TSpace>
            </TButton>
          </TCol>
          <TCol>
            <TSpace align="center" size={4}>
              <TButton tag="a" href="/" variant="text"><ArrowLeftIcon />Home</TButton>
              <TTooltip content={isDark.value ? 'Use light theme' : 'Use dark theme'}>
                <TButton shape="circle" variant="text" aria-label={isDark.value ? 'Use light theme' : 'Use dark theme'} onClick={toggleTheme}>
                  {isDark.value ? <SunnyIcon /> : <MoonIcon />}
                </TButton>
              </TTooltip>
            </TSpace>
          </TCol>
        </TRow>
      </THeader>
      <TContent class="dependencies-content">
        <div class="dependencies-content-inner">
          <TSpace class="dependencies-stack" direction="vertical" size={32}>
            <TSpace direction="vertical" size={8}>
              <TTag theme="primary" variant="light">Chat package manifest</TTag>
              <TypographyTitle class="dependencies-title" level="h1">Dependencies</TypographyTitle>
              <TypographyParagraph class="dependencies-description">
                Packages declared by <TypographyText code>{packageJson.name}</TypographyText>, grouped by how they are used.
              </TypographyParagraph>
            </TSpace>
            <TRow gutter={[16, 16]} aria-label="Dependency summary">
              <TCol xs={12} sm={4}><TStatistic title="Total" value={runtimeDependencies.length + developmentDependencies.length} /></TCol>
              <TCol xs={12} sm={4}><TStatistic title="Runtime" value={runtimeDependencies.length} /></TCol>
              <TCol xs={12} sm={4}><TStatistic title="Development" value={developmentDependencies.length} /></TCol>
            </TRow>
            <TRow gutter={[20, 20]} align="start">
              {dependencyGroups.map((group) => (
                <TCol key={group.title} xs={12} md={6}>
                  <TCard class="dependencies-card" headerBordered title={() => group.title} actions={() => <TTag variant="light">{group.items.length} packages</TTag>}>
                    <TList split>
                      {group.items.map(([name, version]) => (
                        <TListItem key={name} action={() => <TypographyText class="dependency-version" code copyable>{version}</TypographyText>}>
                          <TypographyText class="dependency-name" strong>{name}</TypographyText>
                        </TListItem>
                      ))}
                    </TList>
                  </TCard>
                </TCol>
              ))}
            </TRow>
          </TSpace>
        </div>
      </TContent>
    </TLayout>
  )
})
