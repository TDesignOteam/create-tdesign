<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
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

const count = ref(0)
const decrease = () => {
  count.value -= 1
}
const increase = () => {
  count.value += 1
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
        <t-card class="demo-panel" :bordered="true">
          <template #header>
            <div class="demo-head">
              <div class="demo-title">
                <t-badge dot color="var(--td-success-color)" />
                示例
              </div>
              <span class="demo-subtitle">交互示例</span>
            </div>
          </template>
          <div class="demo-stage">
            <div class="demo-card">
              <t-avatar class="demo-mark" size="54px" shape="round" style="background: var(--td-brand-color); color: var(--td-text-color-anti); font-weight: 800">T</t-avatar>
              <h2>Hello, TDesign</h2>
              <p>点击按钮，体验这个模板中的基础交互。</p>
              <t-space :size="12" align="center">
                <t-button theme="primary" size="large" shape="square" aria-label="减少" @click="decrease">−</t-button>
                <t-button variant="outline" size="large" disabled>{{ count }}</t-button>
                <t-button theme="primary" size="large" shape="square" aria-label="增加" @click="increase">+</t-button>
              </t-space>
              <div class="hint">编辑首页文件并保存，查看热更新效果</div>
            </div>
          </div>
        </t-card>

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
