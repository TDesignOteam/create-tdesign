<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import packageJson from '../../package.json'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'
import './Dependencies.css'

type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'tdesign-chat-theme'
const theme = ref<ThemeMode>('light')
const isDark = computed(() => theme.value === 'dark')
const runtimeDependencies = Object.entries(packageJson.dependencies ?? {})
const developmentDependencies = Object.entries(packageJson.devDependencies ?? {})
const dependencyGroups = [
  { title: 'Runtime dependencies', items: runtimeDependencies },
  { title: 'Development dependencies', items: developmentDependencies },
]
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
</script>

<template>
  <t-layout class="dependencies-layout">
    <t-header class="dependencies-header">
      <t-row class="dependencies-header-inner" align="middle" justify="space-between">
        <t-col>
          <t-button
            class="dependencies-brand"
            tag="a"
            href="/"
            variant="text"
            aria-label="Back to Chat home"
          >
            <t-space align="center" :size="12">
              <img class="dependencies-logo" :src="isDark ? logoDark : logoLight" alt="TDesign" />
              <t-typography-text class="dependencies-brand-name" strong>
                Chat Dependencies
              </t-typography-text>
            </t-space>
          </t-button>
        </t-col>
        <t-col>
          <t-space align="center" :size="4">
            <t-button tag="a" href="/" variant="text">
              <ArrowLeftIcon />
              Home
            </t-button>
            <t-tooltip :content="isDark ? 'Use light theme' : 'Use dark theme'">
              <t-button
                shape="circle"
                variant="text"
                :aria-label="isDark ? 'Use light theme' : 'Use dark theme'"
                @click="toggleTheme"
              >
                <SunnyIcon v-if="isDark" />
                <MoonIcon v-else />
              </t-button>
            </t-tooltip>
          </t-space>
        </t-col>
      </t-row>
    </t-header>
    <t-content class="dependencies-content">
      <div class="dependencies-content-inner">
        <t-space class="dependencies-stack" direction="vertical" :size="32">
          <t-space direction="vertical" :size="8">
            <t-tag theme="primary" variant="light">Chat package manifest</t-tag>
            <t-typography-title class="dependencies-title" level="h1">
              Dependencies
            </t-typography-title>
            <t-typography-paragraph class="dependencies-description">
              Packages declared by
              <t-typography-text code>{{ packageJson.name }}</t-typography-text>
              , grouped by how they are used.
            </t-typography-paragraph>
          </t-space>
          <t-row :gutter="[16, 16]" aria-label="Dependency summary">
            <t-col :xs="12" :sm="4">
              <t-statistic
                title="Total"
                :value="runtimeDependencies.length + developmentDependencies.length"
              />
            </t-col>
            <t-col :xs="12" :sm="4">
              <t-statistic title="Runtime" :value="runtimeDependencies.length" />
            </t-col>
            <t-col :xs="12" :sm="4">
              <t-statistic title="Development" :value="developmentDependencies.length" />
            </t-col>
          </t-row>
          <t-row :gutter="[20, 20]" align="start">
            <t-col v-for="group in dependencyGroups" :key="group.title" :xs="12" :md="6">
              <t-card class="dependencies-card" :header-bordered="true">
                <template #title>{{ group.title }}</template>
                <template #actions>
                  <t-tag variant="light">{{ group.items.length }} packages</t-tag>
                </template>
                <t-list split>
                  <t-list-item v-for="[name, version] in group.items" :key="name">
                    <t-typography-text class="dependency-name" strong>{{ name }}</t-typography-text>
                    <template #action>
                      <t-typography-text class="dependency-version" code copyable>
                        {{ version }}
                      </t-typography-text>
                    </template>
                  </t-list-item>
                </t-list>
              </t-card>
            </t-col>
          </t-row>
        </t-space>
      </div>
    </t-content>
  </t-layout>
</template>
