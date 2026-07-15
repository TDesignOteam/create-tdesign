<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  AppIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BrowseIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CodeIcon,
  ComponentGridIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

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

const theme = ref<Theme>(getInitialTheme())
const isDark = computed(() => theme.value === 'dark')
const logo = computed(() => (isDark.value ? logoDark : logoLight))

const applyTheme = (nextTheme: Theme) => {
  if (typeof document === 'undefined') return
  if (nextTheme === 'dark') {
    document.documentElement.setAttribute('theme-mode', 'dark')
  } else {
    document.documentElement.removeAttribute('theme-mode')
  }
}

applyTheme(theme.value)

const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark'
  window.localStorage.setItem(themeKey, theme.value)
  applyTheme(theme.value)
}

const overview = [
  { icon: CodeIcon, label: 'Application', value: 'Vue 3 + TypeScript' },
  { icon: AppIcon, label: 'Design system', value: 'TDesign Desktop' },
  { icon: CheckCircleIcon, label: 'Workspace', value: 'Ready to develop' },
]

const tasks = [
  { title: 'Start the development server', detail: 'Run the generated command from your project directory.' },
  { title: 'Shape the application shell', detail: 'Edit src/pages/Home.vue and the router to match your product.' },
  { title: 'Build the first workflow', detail: 'Compose TDesign components around a real user task.' },
]
</script>

<template>
  <div class="starter-page">
    <header class="topbar">
      <div class="topbar-inner">
        <img class="brand-logo" :src="logo" alt="TDesign" />
        <div class="topbar-actions">
          <t-tooltip content="Vue component documentation">
            <t-button
              tag="a"
              :href="docsUrl"
              target="_blank"
              shape="circle"
              variant="text"
              aria-label="Open Vue component documentation"
            >
              <BookOpenIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip content="TDesign Vue on GitHub">
            <t-button
              tag="a"
              :href="githubUrl"
              target="_blank"
              shape="circle"
              variant="text"
              aria-label="Open TDesign Vue on GitHub"
            >
              <LogoGithubIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip :content="isDark ? 'Switch to light theme' : 'Switch to dark theme'">
            <t-button shape="circle" variant="text" :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggleTheme">
              <SunnyIcon v-if="isDark" />
              <MoonIcon v-else />
            </t-button>
          </t-tooltip>
        </div>
      </div>
    </header>

    <main class="workspace">
      <section class="welcome" aria-labelledby="starter-title">
        <div class="welcome-copy">
          <t-tag theme="primary" variant="light">__TEMPLATENAME__</t-tag>
          <h1 id="starter-title">__PROJECTNAME__ is ready.</h1>
          <p>A focused starting point for building a reliable desktop application with TDesign.</p>
        </div>
        <a class="docs-action" :href="docsUrl" target="_blank" rel="noreferrer">
          Explore components
          <ArrowRightIcon />
        </a>
      </section>

      <section class="command-panel" aria-label="Development command">
        <span class="command-icon"><CodeIcon /></span>
        <div class="command-copy">
          <span>Development command</span>
          <code>__DEVCOMMAND__</code>
        </div>
        <t-tag class="ready-tag" theme="success" variant="light">Ready</t-tag>
      </section>

      <section class="overview-grid" aria-label="Project overview">
        <t-card v-for="item in overview" :key="item.label" class="overview-card" :bordered="true">
          <span class="overview-icon"><component :is="item.icon" /></span>
          <div>
            <p>{{ item.label }}</p>
            <strong>{{ item.value }}</strong>
          </div>
        </t-card>
      </section>

      <section class="work-grid">
        <t-card class="work-card" title="Getting started" :bordered="true">
          <template #actions>
            <span class="section-status"><span class="status-dot" />Project initialized</span>
          </template>
          <div class="task-list">
            <div v-for="(task, index) in tasks" :key="task.title" class="task-row">
              <span class="task-index">{{ index + 1 }}</span>
              <div>
                <strong>{{ task.title }}</strong>
                <p>{{ task.detail }}</p>
              </div>
            </div>
          </div>
        </t-card>

        <t-card class="work-card resources-card" title="Resources" :bordered="true">
          <a href="./dependencies">
            <span class="resource-icon"><ComponentGridIcon /></span>
            <span><strong>Dependencies</strong><small>Review runtime and development packages</small></span>
            <ChevronRightIcon />
          </a>
          <a :href="docsUrl" target="_blank" rel="noreferrer">
            <span class="resource-icon"><BookOpenIcon /></span>
            <span><strong>Component docs</strong><small>APIs, examples, and design guidance</small></span>
            <ChevronRightIcon />
          </a>
          <a :href="githubUrl" target="_blank" rel="noreferrer">
            <span class="resource-icon"><LogoGithubIcon /></span>
            <span><strong>GitHub repository</strong><small>Source, issues, and releases</small></span>
            <ChevronRightIcon />
          </a>
          <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
            <span class="resource-icon resource-icon-green"><BrowseIcon /></span>
            <span><strong>TDesign overview</strong><small>Explore the full design system</small></span>
            <ChevronRightIcon />
          </a>
        </t-card>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(:root) {
  color: #1d2129;
  background: #f4f6f8;
  color-scheme: light;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --starter-bg: #f4f6f8;
  --starter-surface: #ffffff;
  --starter-subtle: #f7f8fa;
  --starter-text: #1d2129;
  --starter-secondary: #5f6875;
  --starter-border: #dfe3e8;
  --starter-blue: #0052d9;
  --starter-blue-soft: #e8f1ff;
  --starter-green: #078343;
  --starter-green-soft: #e8f7ee;
}

:global(html[theme-mode='dark']) {
  color: #f2f3f5;
  background: #101214;
  color-scheme: dark;
  --starter-bg: #101214;
  --starter-surface: #181b1f;
  --starter-subtle: #20242a;
  --starter-text: #f2f3f5;
  --starter-secondary: #a6adb7;
  --starter-border: #343a43;
  --starter-blue: #4080ff;
  --starter-blue-soft: #1d2f50;
  --starter-green: #4fc48d;
  --starter-green-soft: #173a2a;
}

:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; min-width: 320px; min-height: 100vh; background: var(--starter-bg); }
:global(#app) { min-height: 100vh; }

.starter-page { min-height: 100vh; overflow-x: hidden; color: var(--starter-text); background: var(--starter-bg); }
.topbar { border-bottom: 1px solid var(--starter-border); background: var(--starter-surface); }
.topbar-inner { display: flex; width: 100%; max-width: 1232px; height: 64px; margin: 0 auto; padding: 0 24px; align-items: center; justify-content: space-between; }
.brand-logo { display: block; width: 132px; height: auto; }
.topbar-actions { display: flex; gap: 4px; align-items: center; }
.topbar-actions :deep(.t-button) { color: var(--starter-secondary); }
.workspace { width: 100%; max-width: 1232px; margin: 0 auto; padding: 44px 24px 64px; }
.welcome { display: flex; gap: 24px; align-items: flex-end; justify-content: space-between; margin-bottom: 28px; }
.welcome-copy { min-width: 0; }
.welcome h1 { margin: 14px 0 8px; font-size: 32px; line-height: 1.25; letter-spacing: 0; overflow-wrap: anywhere; }
.welcome p { max-width: 700px; margin: 0; color: var(--starter-secondary); font-size: 16px; line-height: 1.6; }
.docs-action { display: inline-flex; flex: 0 0 auto; gap: 8px; padding: 8px 0; align-items: center; color: var(--starter-blue); font-size: 14px; font-weight: 600; text-decoration: none; }
.command-panel { display: flex; min-width: 0; margin-bottom: 20px; padding: 16px 18px; border: 1px solid var(--starter-border); border-radius: 8px; align-items: center; gap: 14px; background: var(--starter-surface); }
.command-icon, .overview-icon, .resource-icon { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; color: var(--starter-blue); background: var(--starter-blue-soft); }
.command-icon { width: 36px; height: 36px; border-radius: 6px; font-size: 20px; }
.command-copy { display: grid; min-width: 0; flex: 1; gap: 3px; }
.command-copy span { color: var(--starter-secondary); font-size: 12px; }
.command-copy code { color: var(--starter-text); font-family: "SFMono-Regular", Consolas, monospace; font-size: 14px; overflow-wrap: anywhere; }
.ready-tag { flex: 0 0 auto; }
.overview-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 16px; }
.overview-card, .work-card { border-color: var(--starter-border); border-radius: 8px; background: var(--starter-surface); box-shadow: none; }
.overview-card :deep(.t-card__body) { display: flex; min-width: 0; padding: 20px; align-items: center; gap: 14px; }
.overview-icon { width: 40px; height: 40px; border-radius: 6px; font-size: 22px; }
.overview-card:nth-child(3) .overview-icon { color: var(--starter-green); background: var(--starter-green-soft); }
.overview-card p { margin: 0 0 4px; color: var(--starter-secondary); font-size: 12px; }
.overview-card strong { display: block; font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
.work-grid { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr); gap: 16px; align-items: stretch; }
.work-card :deep(.t-card__header) { min-height: 58px; padding: 16px 20px; border-bottom: 1px solid var(--starter-border); }
.work-card :deep(.t-card__title) { color: var(--starter-text); font-size: 16px; font-weight: 600; }
.work-card :deep(.t-card__body) { padding: 0 20px; }
.section-status { display: inline-flex; align-items: center; gap: 7px; color: var(--starter-secondary); font-size: 12px; }
.status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--starter-green); }
.task-row { display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 12px; padding: 18px 0; border-bottom: 1px solid var(--starter-border); }
.task-row:last-child { border-bottom: 0; }
.task-index { display: inline-flex; width: 28px; height: 28px; border-radius: 6px; align-items: center; justify-content: center; color: var(--starter-blue); font-size: 13px; font-weight: 700; background: var(--starter-blue-soft); }
.task-row strong { display: block; margin: 2px 0 5px; font-size: 14px; line-height: 1.4; }
.task-row p { margin: 0; color: var(--starter-secondary); font-size: 13px; line-height: 1.55; }
.resources-card :deep(.t-card__body) { padding: 6px 20px; }
.resources-card a { display: grid; grid-template-columns: 36px minmax(0, 1fr) 18px; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--starter-border); align-items: center; color: var(--starter-text); text-decoration: none; }
.resources-card a:last-child { border-bottom: 0; }
.resource-icon { width: 36px; height: 36px; border-radius: 6px; font-size: 18px; }
.resource-icon-green { color: var(--starter-green); background: var(--starter-green-soft); }
.resources-card strong, .resources-card small { display: block; }
.resources-card strong { margin-bottom: 3px; font-size: 13px; }
.resources-card small { color: var(--starter-secondary); font-size: 12px; line-height: 1.45; }
.resources-card a > :last-child { color: var(--starter-secondary); }

@media (max-width: 760px) {
  .topbar-inner { padding: 0 16px; }
  .brand-logo { width: 116px; }
  .workspace { padding: 32px 16px 48px; }
  .welcome { display: grid; align-items: start; }
  .welcome h1 { font-size: 26px; }
  .overview-grid, .work-grid { grid-template-columns: 1fr; }
  .docs-action { width: fit-content; }
}

@media (max-width: 420px) {
  .topbar-actions { gap: 0; }
  .command-panel { align-items: flex-start; }
  .ready-tag { display: none; }
  .section-status { display: none; }
  .overview-card :deep(.t-card__body) { padding: 16px; }
  .work-card :deep(.t-card__header), .work-card :deep(.t-card__body) { padding-right: 16px; padding-left: 16px; }
}
</style>
