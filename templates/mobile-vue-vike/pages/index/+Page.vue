<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const isDark = ref(false)
const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
const logo = computed(() => (isDark.value ? logoDark : logoLight))
const count = ref(0)

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
const decrease = () => {
  count.value -= 1
}
const increase = () => {
  count.value += 1
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
      </template>
    </t-navbar>

    <section class="intro-band">
      <div class="content-width intro-content">
        <div>
          <h1>__PROJECTNAME__</h1>
          <p class="intro-copy">一个基于 TDesign 的简单交互示例。</p>
        </div>
        <t-tag class="template-id" theme="primary" variant="light">__TEMPLATENAME__</t-tag>
      </div>
    </section>

    <div class="content-width workspace">
      <section class="demo-panel" aria-label="交互示例">
        <div class="demo-head">
          <div class="demo-title">
            <t-badge dot color="var(--starter-green)" />
            示例
          </div>
          <span class="demo-subtitle">交互示例</span>
        </div>
        <div class="demo-stage">
          <div class="demo-card">
            <t-avatar class="demo-mark" size="52px" shape="round" style="background: var(--starter-blue); color: var(--td-text-color-anti); font-weight: 800">T</t-avatar>
            <h2>Hello, TDesign</h2>
            <p>点击按钮，体验这个模板中的基础交互。</p>
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
          <h2 id="info-title">技术信息</h2>
          <p class="info-subtitle">当前模板使用的构建工具与组件库</p>
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
  color: #fff;
  background: linear-gradient(135deg, #0052d9 0%, #1a6bff 100%);
}
[theme-mode='dark'] .intro-band {
  background: linear-gradient(135deg, #174b87 0%, #1a5fb4 100%);
}
.intro-content {
  display: flex;
  min-height: 140px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 16px;
}
.intro-content > div {
  min-width: 0;
}
.intro-content h1 {
  margin: 0;
  overflow-wrap: anywhere;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0;
}
.intro-copy {
  max-width: 560px;
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
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
  border: 1px solid var(--starter-border);
  border-radius: 12px;
  background: var(--starter-surface);
  box-shadow: 0 14px 40px rgba(31, 45, 61, 0.08);
}
.demo-head {
  display: flex;
  height: 56px;
  padding: 0 18px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid var(--starter-border);
}
.demo-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
}
.demo-title :deep(.t-badge) {
  box-shadow: 0 0 0 3px var(--starter-green-soft);
}
.demo-subtitle {
  color: var(--starter-muted);
  font-size: 11px;
}
.demo-stage {
  display: grid;
  min-height: 320px;
  padding: 32px 18px;
  place-items: center;
  background-color: var(--starter-surface-soft);
  background-image: radial-gradient(var(--starter-border) 0.7px, transparent 0.7px);
  background-size: 18px 18px;
}
.demo-card {
  width: min(100%, 360px);
  padding: 32px 24px 26px;
  border: 1px solid var(--starter-border);
  border-radius: 10px;
  background: var(--starter-surface);
  box-shadow: 0 16px 38px rgba(31, 45, 61, 0.1);
  text-align: center;
}
.demo-mark {
  margin: 0 auto 16px;
}
.demo-card h2 {
  margin: 0 0 8px;
  font-size: 20px;
  letter-spacing: 0;
}
.demo-card p {
  margin: 0 0 22px;
  color: var(--starter-secondary);
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
  border: 1px solid var(--starter-border);
  border-radius: 6px;
  background: var(--starter-surface-soft);
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
  color: var(--starter-muted);
  font-size: 11px;
}
.info-panel {
  overflow: hidden;
  border: 1px solid var(--starter-border);
  border-radius: 12px;
  background: var(--starter-surface);
}
.info-head {
  padding: 20px 18px 0;
}
.info-head h2 {
  margin: 0 0 6px;
  font-size: 17px;
  line-height: 1.35;
  letter-spacing: 0;
}
.info-subtitle {
  margin: 0;
  color: var(--starter-muted);
  font-size: 12px;
  line-height: 1.65;
}
.tech-cells {
  margin: 12px 18px 0;
}
.tech-cells :deep(.t-cell) {
  background: var(--starter-surface);
}
.tech-cells :deep(.t-cell__title-text) {
  color: var(--starter-muted);
  font-size: 12px;
}
.tech-cells :deep(.t-cell__note) {
  color: var(--starter-text);
  font-size: 13px;
  font-weight: 600;
}
.resource-links {
  margin: 6px 0 0;
  border-top: 1px solid var(--starter-border);
}
.resource-links .t-cell {
  background: var(--starter-surface);
}
.starter-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 16px 30px;
  color: var(--starter-muted);
  font-size: 11px;
}
.starter-footer a {
  color: var(--starter-muted);
  text-decoration: none;
}
.starter-footer a:hover {
  color: var(--starter-blue);
}
</style>
