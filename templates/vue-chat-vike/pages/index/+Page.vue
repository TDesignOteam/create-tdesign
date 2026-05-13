<script setup lang="ts">
import { ClientOnly } from 'vike-vue/ClientOnly'
import { ChatBubbleIcon } from 'tdesign-icons-vue-next'
import ChatPanel from './ChatPanel.vue'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, Vike, and the TDesign chat component.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready chat shell powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Edit chatServiceConfig in pages/index/+Page.vue to connect your model service.',
  },
]
</script>

<template>
  <main class="page-shell">
    <section class="content-grid">
      <aside class="intro-panel">
        <p class="eyebrow">
          <ChatBubbleIcon style="margin-right: 8px; vertical-align: middle" />
          __TEMPLATENAME__
        </p>
        <div class="hero-copy">
          <h1 class="hero-title">AI Chat Starter</h1>
          <p class="hero-intro">
            __PROJECTNAME__ ships with an SSR-ready chat shell. Connect your real
            model service by updating <code>chatServiceConfig</code> in
            <code>pages/index/+Page.vue</code>.
          </p>
        </div>
        <div class="section-block">
          <p class="section-heading">Getting started</p>
          <div class="section-list">
            <div v-for="item in sections" :key="item.title" class="section-row">
              <span class="section-row-title">{{ item.title }}</span>
              <p class="section-row-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="action-row">
          <button type="button" class="primary-action">Run pnpm dev</button>
          <button type="button" class="secondary-action">Edit chatServiceConfig</button>
        </div>
      </aside>

      <section class="chat-panel">
        <ClientOnly>
          <ChatPanel />
          <template #fallback>
            <div class="chat-placeholder">Hydrating chat workspace...</div>
          </template>
        </ClientOnly>
      </section>
    </section>
  </main>
</template>
