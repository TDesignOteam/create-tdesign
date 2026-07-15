<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  ArrowLeftIcon,
  ComponentGridIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import packageJson from '../../package.json'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'

type Theme = 'light' | 'dark'

const themeKey = 'tdesign-starter-theme'
const theme = ref<Theme>('light')
const isDark = computed(() => theme.value === 'dark')
const logo = computed(() => (isDark.value ? logoDark : logoLight))
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(
  packageJson.devDependencies ?? {},
)
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

const applyTheme = (nextTheme: Theme) => {
  if (typeof document === 'undefined') return
  if (nextTheme === 'dark')
    document.documentElement.setAttribute('theme-mode', 'dark')
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
</script>

<template>
  <t-layout class="dependencies-page">
    <t-header class="topbar">
      <t-row class="topbar-inner" align="middle" justify="space-between">
        <a href="/" aria-label="Back to home">
          <img class="brand-logo" :src="logo" alt="TDesign" />
        </a>
        <t-space class="topbar-actions" :size="4">
          <t-button tag="a" href="/" variant="text">
            <ArrowLeftIcon />Home
          </t-button>
          <t-tooltip
            :content="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            <t-button
              shape="circle"
              variant="text"
              :aria-label="
                isDark ? 'Switch to light theme' : 'Switch to dark theme'
              "
              @click="toggleTheme"
            >
              <SunnyIcon v-if="isDark" />
              <MoonIcon v-else />
            </t-button>
          </t-tooltip>
        </t-space>
      </t-row>
    </t-header>

    <t-content class="dependencies-workspace">
      <section aria-labelledby="dependencies-title">
        <t-row
          class="dependencies-intro"
          align="bottom"
          justify="space-between"
        >
          <t-space direction="vertical" size="small">
            <t-tag theme="primary" variant="light">Package manifest</t-tag>
            <div id="dependencies-title">
              <t-typography-title level="h1">Dependencies</t-typography-title>
            </div>
            <t-typography-text theme="secondary">
              Packages declared by
              <t-typography-text code>{{ packageJson.name }}</t-typography-text>,
              grouped by how they are used.
            </t-typography-text>
          </t-space>
          <span class="dependencies-title-icon"><ComponentGridIcon /></span>
        </t-row>
      </section>

      <section class="dependencies-summary" aria-label="Dependency summary">
        <t-row :gutter="[16, 16]">
          <t-col v-for="item in summary" :key="item.title" :xs="12" :sm="4">
            <t-card :bordered="true">
              <t-statistic :title="item.title" :value="item.value" />
            </t-card>
          </t-col>
        </t-row>
      </section>

      <section aria-label="Dependency lists">
        <t-row align="top" :gutter="[16, 16]">
          <t-col
            v-for="group in dependencyGroups"
            :key="group.title"
            :xs="12"
            :sm="6"
          >
            <t-card
              class="dependencies-card"
              :bordered="true"
              header-bordered
            >
              <template #title>
                <t-typography-text strong>{{ group.title }}</t-typography-text>
              </template>
              <template #actions>
                <t-tag variant="light">{{ group.items.length }} packages</t-tag>
              </template>
              <t-list split>
                <t-list-item
                  v-for="[name, version] in group.items"
                  :key="name"
                >
                  <t-typography-text class="dependency-name" strong>
                    {{ name }}
                  </t-typography-text>
                  <template #action>
                    <t-typography-text code :copyable="{ text: version }">
                      {{ version }}
                    </t-typography-text>
                  </template>
                </t-list-item>
              </t-list>
            </t-card>
          </t-col>
        </t-row>
      </section>
    </t-content>
  </t-layout>
</template>

<style scoped>
.dependencies-page {
  min-height: 100vh;
  color: var(--starter-text);
  background: var(--starter-bg);
}
.dependencies-workspace {
  width: 100%;
  max-width: 1232px;
  margin: 0 auto;
  padding: 44px 24px 64px;
}
.dependencies-intro { margin-bottom: 24px; }
.dependencies-title-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: var(--starter-blue);
  background: var(--starter-blue-soft);
  font-size: 25px;
}
.dependencies-summary { margin-bottom: 16px; }
.dependencies-card { height: 100%; }
.dependencies-card :deep(.t-card__body) { padding: 0; }
.dependency-name {
  min-width: 0;
  overflow-wrap: anywhere;
}
@media (max-width: 760px) {
  .dependencies-workspace { padding: 32px 16px 48px; }
}
@media (max-width: 420px) {
  .dependencies-title-icon { display: none; }
}
</style>
