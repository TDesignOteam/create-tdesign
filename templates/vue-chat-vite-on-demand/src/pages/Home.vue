<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import Demo from './Demo.vue'

type Theme = 'light' | 'dark'

const docsUrl = 'https://tdesign.tencent.com/chat/getting-started'
const githubUrl = 'https://github.com/Tencent/tdesign'
const themeKey = 'tdesign-chat-theme'

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
          <span class="brand-label">AI Chat Starter</span>
        </div>
        <t-space :size="4">
          <t-tooltip content="组件文档">
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
          <t-tooltip content="TDesign on GitHub">
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
          <t-typography-title level="h1" class="intro-title">__PROJECTNAME__</t-typography-title>
          <t-typography-text class="intro-copy" theme="secondary">
            一个基于 TDesign Chat 的流式对话示例。
          </t-typography-text>
        </div>
        <t-tag class="template-id" theme="primary" variant="light" size="large">
          __TEMPLATENAME__
        </t-tag>
      </section>

      <div class="workspace">
        <section class="chat-panel" aria-label="AI chat workspace">
          <div class="chat-panel-heading">
            <div>
              <t-badge dot color="var(--td-success-color)" />
              Assistant
            </div>
            <span>Streaming ready</span>
          </div>
          <div class="chatbot-host">
            <Demo />
          </div>
        </section>

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
:global(*) {
  box-sizing: border-box;
}
:global(body) {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--td-bg-color-page);
}
:global(#app) {
  min-height: 100vh;
}

.starter-page {
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--td-text-color-primary);
  background: var(--td-bg-color-page);
}
.topbar {
  border-bottom: 1px solid var(--td-component-border);
  background: var(--td-bg-color-container);
}
.topbar-inner {
  display: flex;
  width: min(1200px, 100%);
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
  color: var(--td-text-color-secondary);
  font-size: 13px;
}
.topbar :deep(.t-button) {
  color: var(--td-text-color-secondary);
}
.topbar :deep(.t-button:hover) {
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
}

.starter-content {
  width: min(1200px, 100%);
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
.intro-title {
  margin: 0 0 8px;
  font-size: 30px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.intro-copy {
  margin: 0;
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

.chat-panel {
  display: grid;
  grid-template-rows: 48px minmax(0, 1fr);
  min-width: 0;
  height: 620px;
  min-height: 520px;
  overflow: hidden;
  border: 1px solid var(--td-component-border);
  border-radius: 8px;
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
}
.chat-panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  padding: 0 16px;
  border-bottom: 1px solid var(--td-component-border);
  color: var(--td-text-color-placeholder);
  font-size: 12px;
}
.chat-panel-heading > div {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 600;
}
.chat-panel-heading :deep(.t-badge) {
  box-shadow: 0 0 0 3px var(--td-success-color-light);
}
.chatbot-host {
  display: block;
  min-width: 0;
  min-height: 0;
  height: 100%;
  overflow: hidden;
}
.chatbot-host :deep(.t-chatbot),
.chatbot-host :deep([class*='chatbot']) {
  width: 100%;
  height: 100%;
}

.info-panel {
  display: flex;
  min-width: 0;
  border-color: var(--td-component-border);
  border-radius: 8px;
  background: var(--td-bg-color-container);
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
  color: var(--td-text-color-secondary);
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
  color: var(--td-text-color-placeholder);
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
  border: 1px solid var(--td-component-border);
  border-radius: 5px;
  color: var(--td-text-color-secondary);
  font-size: 12px;
}
.resource-link :deep(.t-link__content) {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.resource-arrow {
  color: var(--td-text-color-placeholder);
}

.starter-footer {
  display: flex;
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0 24px 30px;
  align-items: center;
  justify-content: space-between;
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.starter-footer :deep(.t-link) {
  color: var(--td-text-color-placeholder);
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
  .intro-title {
    font-size: 26px;
  }
  .template-id {
    display: inline-block;
    margin-top: 16px;
  }
  .chat-panel {
    height: 540px;
  }
  .starter-footer {
    display: block;
    line-height: 2;
  }
}
</style>
