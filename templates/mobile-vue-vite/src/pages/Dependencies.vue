<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { AppIcon, CodeIcon, ComponentGridIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import packageJson from '../../package.json'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'
import './Dependencies.css'

const STORAGE_KEY = 'tdesign-starter-theme'
const isDark = ref(false)
const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const totalDependencies = runtimeDependencies.length + developmentDependencies.length

function applyTheme(dark: boolean) {
  isDark.value = dark
  document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light')
}

function toggleTheme() {
  const nextDark = !isDark.value
  applyTheme(nextDark)
  localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light')
}

function goHome() {
  window.location.assign('/')
}

onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  applyTheme(
    savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches,
  )
})
</script>

<template>
  <main class="page-shell dependencies-page">
    <t-navbar class="brand-navbar" :fixed="false">
      <template #left>
        <div class="brand-lockup">
          <img class="brand-logo" :src="isDark ? logoDark : logoLight" alt="TDesign" />
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
    <section class="dependencies-hero">
      <div class="dependencies-width">
        <span class="dependencies-kicker">
          <t-typography-text theme="primary">Project manifest</t-typography-text>
        </span>
        <t-typography-title level="h1">Dependencies</t-typography-title>
        <div class="dependencies-copy">
          <t-typography-paragraph>
            Packages available in this starter, with the exact version ranges from package.json.
          </t-typography-paragraph>
        </div>
        <t-grid class="dependencies-summary" :column="3" border theme="card">
          <t-grid-item>
            <template #image><AppIcon size="24px" /></template>
            <template #text>
              <t-typography-title level="h3">{{ runtimeDependencies.length }}</t-typography-title>
            </template>
            <template #description>
              <t-typography-text theme="secondary">Runtime</t-typography-text>
            </template>
          </t-grid-item>
          <t-grid-item>
            <template #image><CodeIcon size="24px" /></template>
            <template #text>
              <t-typography-title level="h3">
                {{ developmentDependencies.length }}
              </t-typography-title>
            </template>
            <template #description>
              <t-typography-text theme="secondary">Development</t-typography-text>
            </template>
          </t-grid-item>
          <t-grid-item>
            <template #image><ComponentGridIcon size="24px" /></template>
            <template #text>
              <t-typography-title level="h3">{{ totalDependencies }}</t-typography-title>
            </template>
            <template #description>
              <t-typography-text theme="secondary">Total</t-typography-text>
            </template>
          </t-grid-item>
        </t-grid>
      </div>
    </section>
    <div class="dependencies-width dependencies-content">
      <section class="dependency-section" aria-label="Runtime dependencies">
        <div class="dependency-heading">
          <t-typography-title level="h2">Runtime dependencies</t-typography-title>
          <span class="dependency-count">
            <t-typography-text theme="secondary">
              {{ runtimeDependencies.length }} packages
            </t-typography-text>
          </span>
        </div>
        <t-cell-group theme="card">
          <t-cell
            v-for="[name, version] in runtimeDependencies"
            :key="name"
            class="dependency-cell"
          >
            <template #title>
              <t-typography-text strong>{{ name }}</t-typography-text>
            </template>
            <template #note>
              <span class="dependency-version">
                <t-typography-text code :copyable="{ text: version }">
                  {{ version }}
                </t-typography-text>
              </span>
            </template>
          </t-cell>
        </t-cell-group>
      </section>
      <section class="dependency-section" aria-label="Development dependencies">
        <div class="dependency-heading">
          <t-typography-title level="h2">Development dependencies</t-typography-title>
          <span class="dependency-count">
            <t-typography-text theme="secondary">
              {{ developmentDependencies.length }} packages
            </t-typography-text>
          </span>
        </div>
        <t-cell-group theme="card">
          <t-cell
            v-for="[name, version] in developmentDependencies"
            :key="name"
            class="dependency-cell"
          >
            <template #title>
              <t-typography-text strong>{{ name }}</t-typography-text>
            </template>
            <template #note>
              <span class="dependency-version">
                <t-typography-text code :copyable="{ text: version }">
                  {{ version }}
                </t-typography-text>
              </span>
            </template>
          </t-cell>
        </t-cell-group>
      </section>
      <t-button class="dependencies-home" variant="outline" size="large" block @click="goHome">
        Back to home
      </t-button>
    </div>
  </main>
</template>
