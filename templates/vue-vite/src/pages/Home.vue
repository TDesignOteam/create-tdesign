<script setup lang="ts">
import { computed, ref } from 'vue'
import Demo from './Demo.vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
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

const techInfo = [
  { label: '构建工具', content: 'Vite' },
  { label: '组件库', content: 'tdesign-vue-next' },
  { label: '开发语言', content: 'TypeScript' },
]

const resources = [
  { label: '依赖清单', href: './dependencies', external: false },
  { label: '组件文档', href: docsUrl, external: true },
]
</script>

<template>
  <t-layout class="starter-page">
    <t-header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <img class="brand-logo" :src="logo" alt="TDesign" />
          <t-divider class="brand-divider" layout="vertical" />
          <span class="brand-label">Project Starter</span>
        </div>
        <t-space :size="4">
          <t-tooltip content="Vue component documentation">
            <t-button
              tag="a"
              :href="docsUrl"
              target="_blank"
              rel="noreferrer"
              shape="circle"
              variant="text"
              aria-label="组件文档"
            >
              <BookOpenIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip content="TDesign Vue on GitHub">
            <t-button
              tag="a"
              :href="githubUrl"
              target="_blank"
              rel="noreferrer"
              shape="circle"
              variant="text"
              aria-label="GitHub"
            >
              <LogoGithubIcon />
            </t-button>
          </t-tooltip>
          <t-tooltip :content="isDark ? '切换为亮色主题' : '切换为暗色主题'">
            <t-button
              shape="circle"
              variant="text"
              :aria-label="isDark ? '切换为亮色主题' : '切换为暗色主题'"
              @click="toggleTheme"
            >
              <SunnyIcon v-if="isDark" />
              <MoonIcon v-else />
            </t-button>
          </t-tooltip>
        </t-space>
      </div>
    </t-header>

    <t-content class="starter-content">
      <section class="intro">
        <div>
          <h1>__PROJECTNAME__</h1>
          <p>一个基于 TDesign 的简单交互示例。</p>
        </div>
        <t-tag class="template-id" theme="primary" variant="light" size="large">
          __TEMPLATENAME__
        </t-tag>
      </section>

      <div class="workspace">
        <Demo />

        <t-card class="info-panel" :bordered="true">
          <template #title>
            <span class="info-title">技术信息</span>
          </template>
          <template #subtitle>
            <span class="info-subtitle">当前模板使用的构建工具与组件库</span>
          </template>
          <t-descriptions :column="1" :bordered="false">
            <t-descriptions-item v-for="item in techInfo" :key="item.label" :label="item.label">
              {{ item.content }}
            </t-descriptions-item>
          </t-descriptions>
          <div class="resource-links">
            <t-link
              v-for="item in resources"
              :key="item.label"
              class="resource-link"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noreferrer' : undefined"
              :hover="'color'"
            >
              <span>{{ item.label }}</span>
              <span class="resource-arrow">→</span>
            </t-link>
          </div>
        </t-card>
      </div>
    </t-content>

    <t-footer class="starter-footer">
      <span>Powered by TDesign</span>
      <t-link href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer" :hover="'color'">
        组件文档 →
      </t-link>
    </t-footer>
  </t-layout>
</template>

<style scoped>
:global(:root) {
  color: #1d2129;
  background: #f5f7fa;
  color-scheme: light;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  --starter-bg: #f5f7fa;
  --starter-surface: #ffffff;
  --starter-surface-soft: #f7f8fa;
  --starter-text: #1d2129;
  --starter-secondary: #5f6b7a;
  --starter-muted: #8b96a5;
  --starter-border: #dfe3e8;
  --starter-blue: #0052d9;
  --starter-blue-hover: #003cab;
  --starter-blue-soft: #e8f1ff;
  --starter-green: #078343;
  --starter-green-soft: #e8f7ee;
  --starter-shadow: 0 14px 40px rgba(31, 45, 61, 0.08);
}

:global(html[theme-mode='dark']) {
  color: #f2f3f5;
  background: #101214;
  color-scheme: dark;
  --starter-bg: #101214;
  --starter-surface: #181b1f;
  --starter-surface-soft: #20242a;
  --starter-text: #f2f3f5;
  --starter-secondary: #a6adb7;
  --starter-muted: #7d8794;
  --starter-border: #343a43;
  --starter-blue: #4587ff;
  --starter-blue-hover: #6ca0ff;
  --starter-blue-soft: #1d2f50;
  --starter-green: #4fc48d;
  --starter-green-soft: #173a2a;
  --starter-shadow: 0 18px 44px rgba(0, 0, 0, 0.24);
}

:global(*) {
  box-sizing: border-box;
}
:global(body) {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--starter-bg);
}
:global(#app) {
  min-height: 100vh;
}

.starter-page {
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--starter-text);
  background: var(--starter-bg);
}
.topbar {
  border-bottom: 1px solid var(--starter-border);
  background: var(--starter-surface);
}
.topbar-inner {
  display: flex;
  width: min(1040px, 100%);
  height: 64px;
  margin: 0 auto;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-logo {
  display: block;
  width: 126px;
  height: auto;
}
.brand-divider {
  height: 18px;
}
.brand-divider :deep(.t-divider) {
  margin: 0;
}
.brand-label {
  color: var(--starter-secondary);
  font-size: 13px;
}
.topbar :deep(.t-button) {
  color: var(--starter-secondary);
}
.topbar :deep(.t-button:hover) {
  color: var(--starter-blue);
  background: var(--starter-blue-soft);
}

.starter-content {
  width: min(1040px, 100%);
  margin: 0 auto;
  padding: 20px 24px 64px;
}
.intro {
  display: flex;
  margin-bottom: 18px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}
.intro h1 {
  margin: 0 0 8px;
  font-size: 30px;
  line-height: 1.3;
  letter-spacing: 0;
  overflow-wrap: anywhere;
}
.intro p {
  margin: 0;
  color: var(--starter-secondary);
  font-size: 14px;
  line-height: 1.65;
}
.template-id {
  flex: 0 0 auto;
}

.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.65fr);
  gap: 18px;
  align-items: stretch;
}

.info-panel {
  display: flex;
  min-width: 0;
  border-color: var(--starter-border);
  border-radius: 8px;
  background: var(--starter-surface);
  flex-direction: column;
}
.info-panel :deep(.t-card__header) {
  padding: 24px 24px 0;
  border-bottom: 0;
}
.info-title {
  font-size: 17px;
  font-weight: 600;
}
.info-subtitle {
  color: var(--starter-secondary);
  font-size: 12px;
}
.info-panel :deep(.t-card__body) {
  display: flex;
  min-height: 0;
  padding: 8px 24px 24px;
  flex: 1;
  flex-direction: column;
}
.info-panel :deep(.t-descriptions__label) {
  color: var(--starter-muted);
  font-size: 12px;
}
.info-panel :deep(.t-descriptions__content) {
  font-size: 13px;
  font-weight: 600;
  text-align: right;
}
.resource-links {
  display: grid;
  margin-top: auto;
  padding-top: 24px;
  gap: 8px;
}
.resource-link {
  display: flex;
  min-height: 42px;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--starter-border);
  border-radius: 5px;
  color: var(--starter-secondary);
  font-size: 12px;
}
.resource-link :deep(.t-link__content) {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.resource-arrow {
  color: var(--starter-muted);
}

.starter-footer {
  display: flex;
  width: min(1040px, 100%);
  margin: 0 auto;
  padding: 0 24px 30px;
  align-items: center;
  justify-content: space-between;
  color: var(--starter-muted);
  font-size: 11px;
}
.starter-footer :deep(.t-link) {
  color: var(--starter-muted);
  font-size: 11px;
}

@media (max-width: 820px) {
  .workspace {
    grid-template-columns: 1fr;
  }
  .info-panel {
    min-height: 300px;
  }
}
@media (max-width: 600px) {
  .topbar-inner,
  .starter-content,
  .starter-footer {
    padding-right: 16px;
    padding-left: 16px;
  }
  .brand-logo {
    width: 112px;
  }
  .brand-divider,
  .brand-label {
    display: none;
  }
  .starter-content {
    padding-top: 16px;
  }
  .intro {
    display: block;
  }
  .intro h1 {
    font-size: 26px;
  }
  .template-id {
    display: inline-block;
    margin-top: 16px;
  }
  .starter-footer {
    display: block;
    line-height: 2;
  }
}
</style>
