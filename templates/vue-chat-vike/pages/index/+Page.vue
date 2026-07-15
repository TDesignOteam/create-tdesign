<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ClientOnly } from 'vike-vue/ClientOnly'
import {
  BookOpenIcon,
  ComponentGridIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import logoDark from '../../src/assets/TDesign-logo_dark.png'
import logoLight from '../../src/assets/TDesign-logo_light.png'
import ChatPanel from './ChatPanel.vue'

type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'tdesign-chat-theme'
const theme = ref<ThemeMode>('light')
const isDark = computed(() => theme.value === 'dark')
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
  <main class="app-shell">
    <header class="app-header">
      <div class="header-inner">
        <a class="brand" href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
          <img class="brand-logo" :src="isDark ? logoDark : logoLight" alt="TDesign" />
          <span class="brand-divider" aria-hidden="true" />
          <span class="product-name">AI Chat Starter</span>
        </a>

        <div class="template-tags" aria-label="Template status">
          <span class="template-tag">__TEMPLATENAME__</span>
          <span class="online-tag">
            <i aria-hidden="true" />
            Online
          </span>
        </div>

        <nav class="header-actions" aria-label="Resources">
          <a class="nav-action" href="/dependencies">
            <ComponentGridIcon />
            <span>Dependencies</span>
          </a>
          <a
            class="nav-action"
            href="https://tdesign.tencent.com/chat/getting-started"
            target="_blank"
            rel="noreferrer"
          >
            <BookOpenIcon />
            <span>Docs</span>
          </a>
          <a
            class="nav-action"
            href="https://github.com/Tencent/tdesign"
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithubIcon />
            <span>GitHub</span>
          </a>
          <button
            type="button"
            class="theme-button"
            :aria-label="isDark ? 'Use light theme' : 'Use dark theme'"
            :title="isDark ? 'Use light theme' : 'Use dark theme'"
            @click="toggleTheme"
          >
            <SunnyIcon v-if="isDark" />
            <MoonIcon v-else />
          </button>
        </nav>
      </div>
    </header>

    <div class="workspace-grid">
      <section class="chat-panel" aria-label="AI chat workspace">
        <div class="chat-panel-heading">
          <div>
            <span class="status-dot" aria-hidden="true" />
            Assistant
          </div>
          <span>Streaming ready</span>
        </div>
        <ClientOnly>
          <ChatPanel />
          <template #fallback>
            <div class="chatbot-host chat-placeholder">Preparing chat workspace...</div>
          </template>
        </ClientOnly>
      </section>

      <aside class="setup-panel">
        <div class="setup-heading">
          <span class="eyebrow">Starter configuration</span>
          <h1>Build on a working chat foundation</h1>
          <p>Chatbot is client-rendered while the surrounding application remains SSR-ready.</p>
        </div>

        <dl class="config-list">
          <div>
            <dt>Transport</dt>
            <dd>SSE stream</dd>
          </div>
          <div>
            <dt>Rendering</dt>
            <dd>Vike SSR</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>
              <span class="status-dot" aria-hidden="true" />
              Remote endpoint
            </dd>
          </div>
        </dl>

        <div class="command-block">
          <span>Start locally</span>
          <code>__DEVCOMMAND__</code>
        </div>

        <p class="setup-note">
          Update
          <code>chatServiceConfig</code>
          in
          <code>ChatPanel</code>
          when your service is ready.
        </p>
      </aside>
    </div>
  </main>
</template>
