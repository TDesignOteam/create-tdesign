<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  AppIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BrowseIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CodeIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/vue-next/overview'
const githubUrl = 'https://github.com/Tencent/tdesign-vue-next'
const themeKey = 'tdesign-starter-theme'
const theme = ref<Theme>('light')
const isDark = computed(() => theme.value === 'dark')
const logo = computed(() => (isDark.value ? logoDark : logoLight))

const applyTheme = (nextTheme: Theme) => {
  if (nextTheme === 'dark') document.documentElement.setAttribute('theme-mode', 'dark')
  else document.documentElement.removeAttribute('theme-mode')
}

onMounted(() => {
  const savedTheme = window.localStorage.getItem(themeKey)
  theme.value = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  applyTheme(theme.value)
})

const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark'
  window.localStorage.setItem(themeKey, theme.value)
  applyTheme(theme.value)
}

const overview = [
  { icon: CodeIcon, label: 'Application', value: 'Vue 3 + Vike' },
  { icon: AppIcon, label: 'Design system', value: 'TDesign Desktop' },
  { icon: CheckCircleIcon, label: 'Workspace', value: 'SSR ready' },
]

const tasks = [
  { title: 'Start the development server', detail: 'Run the generated command from your project directory.' },
  { title: 'Shape the application shell', detail: 'Edit pages/index/+Page.vue and the layout to match your product.' },
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
            <t-button tag="a" :href="docsUrl" target="_blank" shape="circle" variant="text" aria-label="Open Vue component documentation">
              <BookOpenIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip content="TDesign Vue on GitHub">
            <t-button tag="a" :href="githubUrl" target="_blank" shape="circle" variant="text" aria-label="Open TDesign Vue on GitHub">
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
        <a class="docs-action" :href="docsUrl" target="_blank" rel="noreferrer">Explore components <ArrowRightIcon /></a>
      </section>

      <section class="command-panel" aria-label="Development command">
        <span class="command-icon"><CodeIcon /></span>
        <div class="command-copy"><span>Development command</span><code>__DEVCOMMAND__</code></div>
        <t-tag class="ready-tag" theme="success" variant="light">Ready</t-tag>
      </section>

      <section class="overview-grid" aria-label="Project overview">
        <t-card v-for="item in overview" :key="item.label" class="overview-card" :bordered="true">
          <span class="overview-icon"><component :is="item.icon" /></span>
          <div><p>{{ item.label }}</p><strong>{{ item.value }}</strong></div>
        </t-card>
      </section>

      <section class="work-grid">
        <t-card class="work-card" title="Getting started" :bordered="true">
          <template #actions><span class="section-status"><span class="status-dot" />Project initialized</span></template>
          <div class="task-list">
            <div v-for="(task, index) in tasks" :key="task.title" class="task-row">
              <span class="task-index">{{ index + 1 }}</span>
              <div><strong>{{ task.title }}</strong><p>{{ task.detail }}</p></div>
            </div>
          </div>
        </t-card>

        <t-card class="work-card resources-card" title="Resources" :bordered="true">
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
