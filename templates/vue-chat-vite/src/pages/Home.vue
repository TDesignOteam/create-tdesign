<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Chatbot } from '@tdesign-vue-next/chat'
import {
  BookOpenIcon,
  ComponentGridIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-vue-next'
import type { AIMessageContent, ChatServiceConfig, SSEChunkData } from '@tdesign-vue-next/chat'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

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

const chatServiceConfig: ChatServiceConfig = {
  endpoint: 'https://1257786608-9i9j1kpa67.ap-guangzhou.tencentscf.com/sse/normal',
  stream: true,
  onMessage: (chunk: SSEChunkData): AIMessageContent => {
    const data = chunk.data as { msg?: string } | undefined

    return {
      type: 'markdown',
      data: data?.msg ?? '',
    }
  },
}
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
        <div class="chatbot-host">
          <Chatbot :chat-service-config="chatServiceConfig" />
        </div>
      </section>

      <aside class="setup-panel">
        <div class="setup-heading">
          <span class="eyebrow">Starter configuration</span>
          <h1>Build on a working chat foundation</h1>
          <p>Chatbot is connected to a streaming SSE service and maps each response to markdown.</p>
        </div>

        <dl class="config-list">
          <div>
            <dt>Transport</dt>
            <dd>SSE stream</dd>
          </div>
          <div>
            <dt>Response</dt>
            <dd>Markdown</dd>
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
          when your model service is ready.
        </p>
      </aside>
    </div>
  </main>
</template>
