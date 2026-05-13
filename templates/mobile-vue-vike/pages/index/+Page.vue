<script setup lang="ts">
import { AppIcon } from 'tdesign-icons-vue-next'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, TypeScript, Vike, and TDesign Mobile Vue.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready mobile web app powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Open pages/index/+Page.vue and start shaping __PROJECTNAME__.',
  },
]
</script>

<template>
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">
        <AppIcon style="margin-right: 8px; vertical-align: middle" />
        __TEMPLATENAME__
      </p>
      <div class="hero-copy">
        <h1 class="hero-title">Mobile TDesign Starter</h1>
        <p class="hero-intro">
          __PROJECTNAME__ is ready for a mobile web app with Vue 3, Vike, and
          TDesign Mobile.
        </p>
      </div>
    </section>

    <section class="section-block">
      <p class="section-heading">Getting started</p>
      <t-cell-group theme="card">
        <t-cell
          v-for="item in sections"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          arrow
        />
      </t-cell-group>
    </section>

    <section class="actions">
      <t-button theme="primary" size="large" block>Run pnpm dev</t-button>
      <t-button variant="outline" size="large" block>Edit pages/index/+Page.vue</t-button>
    </section>
  </main>
</template>
