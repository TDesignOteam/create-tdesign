<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { BookOpenIcon, LogoGithubIcon, MoonIcon, SunnyIcon } from 'tdesign-icons-vue-next'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

const STORAGE_KEY = 'tdesign-starter-theme'
const isDark = ref(false)
const themeLabel = computed(() => (isDark.value ? 'Switch to light theme' : 'Switch to dark theme'))
const resources = [
  { title: 'Mobile Vue documentation', description: 'Components, design guidance, and API reference', url: 'https://tdesign.tencent.com/mobile-vue/overview' },
  { title: 'TDesign Mobile Vue on GitHub', description: 'Source code, releases, and issue tracker', url: 'https://github.com/Tencent/tdesign-mobile-vue' },
]
function applyTheme(dark: boolean) { isDark.value = dark; document.documentElement.setAttribute('theme-mode', dark ? 'dark' : 'light') }
function toggleTheme() { const nextDark = !isDark.value; applyTheme(nextDark); localStorage.setItem(STORAGE_KEY, nextDark ? 'dark' : 'light') }
function openLink(url: string) { window.open(url, '_blank', 'noopener,noreferrer') }
onMounted(() => { const savedTheme = localStorage.getItem(STORAGE_KEY); applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) })
</script>

<template>
  <main class="page-shell">
    <t-navbar class="brand-navbar" :fixed="false"><template #left><div class="brand-lockup"><img class="brand-logo" :src="isDark ? logoDark : logoLight" alt="TDesign" /><t-tag class="template-tag" theme="primary" variant="light">__TEMPLATENAME__</t-tag></div></template><template #right><button class="theme-button" type="button" :aria-label="themeLabel" :title="themeLabel" @click.stop="toggleTheme"><SunnyIcon v-if="isDark" size="20px" /><MoonIcon v-else size="20px" /></button></template></t-navbar>
    <section class="intro-band"><div class="content-width intro-content"><div><p class="overline">Mobile starter workspace</p><h1>__PROJECTNAME__</h1><p class="intro-copy">A compact Vue 3 workspace with TDesign Mobile components and production-ready defaults.</p></div><t-tag theme="success" variant="light">Ready</t-tag></div></section>
    <div class="content-width workspace">
      <section class="workspace-section" aria-labelledby="overview-title"><div class="section-title-row"><div><p class="section-kicker">Overview</p><h2 id="overview-title">Project status</h2></div><span class="status-dot">Configured</span></div><t-cell-group theme="card"><t-cell title="UI foundation" description="Vue 3 + TypeScript + TDesign Mobile Vue" note="Active" /><t-cell title="Template" description="__TEMPLATENAME__" note="Mobile" /></t-cell-group></section>
      <section class="workspace-section" aria-labelledby="command-title"><div class="section-title-row"><div><p class="section-kicker">Quick start</p><h2 id="command-title">Development command</h2></div></div><div class="command-row"><code>__DEVCOMMAND__</code><t-tag theme="success" variant="light-outline">Local</t-tag></div></section>
      <section class="workspace-section" aria-labelledby="resources-title"><div class="section-title-row"><div><p class="section-kicker">Resources</p><h2 id="resources-title">Build from here</h2></div></div><t-cell-group theme="card"><t-cell v-for="item in resources" :key="item.url" :title="item.title" :description="item.description" arrow hover @click="openLink(item.url)" /></t-cell-group></section>
      <div class="actions"><t-button theme="primary" size="large" block @click="openLink(resources[0].url)"><template #icon><BookOpenIcon /></template>Open documentation</t-button><t-button variant="outline" size="large" block @click="openLink(resources[1].url)"><template #icon><LogoGithubIcon /></template>View on GitHub</t-button></div>
    </div>
  </main>
</template>
