<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const isDark = ref(false)
const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
const logo = computed(() => (isDark.value ? logoDark : logoLight))
const count = ref(0)
const decrease = () => {
  count.value -= 1
}
const increase = () => {
  count.value += 1
}

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

function applyTheme(dark: boolean) {
  isDark.value = dark
  document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light')
}
function toggleTheme() {
  const nextDark = !isDark.value
  applyTheme(nextDark)
  localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light')
}
function openLink(url: string, internal = false) {
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
</script>

<template>
  <main class="page-shell">
    <t-navbar class="brand-navbar" :fixed="false">
      <template #left>
        <div class="brand-lockup">
          <img class="brand-logo" :src="logo" alt="TDesign" />
          <t-tag class="template-tag" theme="primary" variant="light">__TEMPLATENAME__</t-tag>
        </div>
      </template>
      <template #right>
        <div class="navbar-actions">
          <a
            class="icon-button"
            :href="docsUrl"
            target="_blank"
            rel="noreferrer"
            :aria-label="'组件文档'"
            :title="'组件文档'"
          >
            <BookOpenIcon size="20px" />
          </a>
          <a
            class="icon-button"
            :href="githubUrl"
            target="_blank"
            rel="noreferrer"
            :aria-label="'GitHub'"
            :title="'GitHub'"
          >
            <LogoGithubIcon size="20px" />
          </a>
          <button
            class="theme-button"
            type="button"
            :aria-label="themeLabel"
            :title="themeLabel"
            @click.stop="toggleTheme"
          >
            <SunnyIcon v-if="isDark" size="20px" />
            <MoonIcon v-else size="20px" />
          </button>
        </div>
      </template>
    </t-navbar>

    <section class="intro-band">
      <div class="content-width intro-content">
        <div>
          <t-typography-title class="intro-title" level="h1">__PROJECTNAME__</t-typography-title>
          <t-typography-paragraph class="intro-copy">
            一个基于 TDesign 的简单交互示例。
          </t-typography-paragraph>
        </div>
        <t-tag class="template-id" theme="primary" variant="light">__TEMPLATENAME__</t-tag>
      </div>
    </section>

    <div class="content-width workspace">
      <section class="demo-panel" aria-label="交互示例">
        <div class="demo-head">
          <div class="demo-title">
            <t-badge dot color="var(--td-success-color)" />
            示例
          </div>
          <span class="demo-subtitle">交互示例</span>
        </div>
        <div class="demo-stage">
          <div class="demo-card">
            <t-avatar
              class="demo-mark"
              size="52px"
              shape="round"
              style="
                background: var(--td-brand-color);
                color: var(--td-text-color-anti);
                font-weight: 800;
              "
            >
              T
            </t-avatar>
            <t-typography-title class="demo-card-title" level="h3">
              Hello, TDesign
            </t-typography-title>
            <t-typography-paragraph class="demo-card-copy" theme="secondary">
              点击按钮，体验这个模板中的基础交互。
            </t-typography-paragraph>
            <div class="counter" aria-label="计数器">
              <t-button
                class="demo-button"
                theme="primary"
                size="large"
                shape="square"
                aria-label="减少"
                @click="decrease"
              >
                −
              </t-button>
              <span class="count">{{ count }}</span>
              <t-button
                class="demo-button"
                theme="primary"
                size="large"
                shape="square"
                aria-label="增加"
                @click="increase"
              >
                +
              </t-button>
            </div>
            <div class="hint">编辑首页文件并保存，查看热更新效果</div>
          </div>
        </div>
      </section>

      <section class="info-panel" aria-labelledby="info-title">
        <div class="info-head">
          <t-typography-title id="info-title" class="info-title" level="h2">
            技术信息
          </t-typography-title>
          <t-typography-paragraph class="info-subtitle" theme="secondary">
            当前模板使用的构建工具与组件库
          </t-typography-paragraph>
        </div>
        <t-cell-group :bordered="false" class="tech-cells">
          <t-cell
            v-for="item in techInfo"
            :key="item.label"
            :title="item.label"
            :note="item.value"
          />
        </t-cell-group>
        <div class="resource-links">
          <t-cell
            v-for="item in resources"
            :key="item.label"
            :title="item.label"
            arrow
            hover
            @click="openLink(item.href, !item.external)"
          />
        </div>
      </section>
    </div>

    <footer class="starter-footer">
      <span>Powered by TDesign</span>
      <a href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">组件文档 →</a>
    </footer>
  </main>
</template>

<style scoped>
.intro-band {
  color: var(--td-text-color-anti);
  background: linear-gradient(135deg, var(--td-brand-color) 0%, var(--td-brand-color-6) 100%);
}
[theme-mode='dark'] .intro-band {
  background: linear-gradient(135deg, var(--td-brand-color-7) 0%, var(--td-brand-color-6) 100%);
}
.intro-content {
  display: flex;
  min-height: 140px;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--td-spacer-2);
  padding: 24px 16px;
}
.intro-content > div {
  min-width: 0;
}
.intro-title {
  margin: 0;
  overflow-wrap: anywhere;
  font-size: 28px;
  line-height: 1.2;
}
.intro-copy {
  max-width: 560px;
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.55;
}
.template-id {
  flex: 0 0 auto;
}
.workspace {
  display: grid;
  gap: 18px;
  padding: 18px 12px 30px;
}
.demo-panel {
  overflow: hidden;
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-large);
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
}
.demo-head {
  display: flex;
  height: 56px;
  padding: 0 18px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid var(--td-component-border);
}
.demo-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
}
.demo-title :deep(.t-badge) {
  box-shadow: 0 0 0 3px var(--td-success-color-light);
}
.demo-subtitle {
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.demo-stage {
  display: grid;
  min-height: 320px;
  padding: 32px 18px;
  place-items: center;
  background-color: var(--td-bg-color-secondarycontainer);
  background-image: radial-gradient(var(--td-component-border) 0.7px, transparent 0.7px);
  background-size: 18px 18px;
}
.demo-card {
  width: min(100%, 360px);
  padding: 32px 24px 26px;
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-default);
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
  text-align: center;
}
.demo-mark {
  margin: 0 auto 16px;
}
.demo-card-title {
  margin: 0 0 8px;
  font-size: 20px;
}
.demo-card-copy {
  margin: 0 0 22px;
  font-size: 13px;
  line-height: 1.65;
}
.counter {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
.count {
  display: grid;
  min-width: 60px;
  height: 36px;
  padding: 0 12px;
  place-items: center;
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-default);
  background: var(--td-bg-color-secondarycontainer);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 15px;
  font-weight: 600;
}
.demo-button {
  min-width: 40px;
  height: 40px;
  font-size: 18px;
}
.hint {
  margin-top: 20px;
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.info-panel {
  overflow: hidden;
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-large);
  background: var(--td-bg-color-container);
}
.info-head {
  padding: 20px 18px 0;
}
.info-title {
  margin: 0 0 6px;
  font-size: 17px;
  line-height: 1.35;
}
.info-subtitle {
  margin: 0;
  font-size: 12px;
  line-height: 1.65;
}
.tech-cells {
  margin: 12px 18px 0;
}
.tech-cells :deep(.t-cell) {
  background: var(--td-bg-color-container);
}
.tech-cells :deep(.t-cell__title-text) {
  color: var(--td-text-color-placeholder);
  font-size: 12px;
}
.tech-cells :deep(.t-cell__note) {
  color: var(--td-text-color-primary);
  font-size: 13px;
  font-weight: 600;
}
.resource-links {
  margin: 6px 0 0;
  border-top: 1px solid var(--td-component-border);
}
.resource-links .t-cell {
  background: var(--td-bg-color-container);
}
.starter-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 16px 30px;
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.starter-footer a {
  color: var(--td-text-color-placeholder);
  text-decoration: none;
}
.starter-footer a:hover {
  color: var(--td-brand-color);
}
</style>
