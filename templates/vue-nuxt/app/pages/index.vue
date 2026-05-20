<script setup lang="ts">
const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, TypeScript, Nuxt 4, and TDesign desktop components.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use Nuxt file-system routing with server rendering enabled by default.',
  },
  {
    title: 'Next step',
    description: 'Open app/pages/index.vue and start shaping __PROJECTNAME__.',
  },
]
</script>

<template>
  <main class="page-shell">
    <section class="hero-grid">
      <t-card class="hero-card" :bordered="false">
        <t-space direction="vertical" size="20px">
          <p class="eyebrow">
            <app-icon style="margin-right: 6px; vertical-align: middle" />
            __TEMPLATENAME__
          </p>
          <div class="hero-copy">
            <h1 class="hero-title">Create TDesign</h1>
            <p class="hero-intro">
              Your __PROJECTNAME__ project is ready. Start building with Vue 3,
              TypeScript, Nuxt 4, and TDesign.
            </p>
          </div>
          <div class="action-row">
            <t-button theme="primary">Run pnpm dev</t-button>
            <t-button variant="outline">Open app/pages/index.vue</t-button>
          </div>
        </t-space>
      </t-card>

      <t-card class="panel-card">
        <div class="section-block">
          <p class="section-heading">Getting started</p>
          <div class="section-list">
            <div v-for="item in sections" :key="item.title" class="section-row">
              <span class="section-row-title">{{ item.title }}</span>
              <p class="section-row-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </t-card>
    </section>
  </main>
</template>
