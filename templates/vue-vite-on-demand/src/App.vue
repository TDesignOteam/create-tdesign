<script setup lang="ts">
import { AppIcon } from 'tdesign-icons-vue-next'

const highlights = [
  'Vue 3 + TypeScript',
  'Vite dev/build pipeline',
  'TDesign desktop components',
]
</script>

<template>
  <main class="page-shell">
    <section class="hero-grid">
      <t-card class="hero-card" :bordered="false">
        <t-space direction="vertical" size="16px">
          <t-tag theme="primary" variant="light">
            <AppIcon style="margin-right: 6px; vertical-align: middle" />
            __TEMPLATENAME__
          </t-tag>
          <div>
            <h1>Create TDesign</h1>
            <p>
              Your __PROJECTNAME__ project is ready. Start building with Vue 3,
              TypeScript, and TDesign.
            </p>
          </div>
          <t-space>
            <t-button theme="primary">Open Docs</t-button>
            <t-button variant="outline">Start Editing</t-button>
          </t-space>
        </t-space>
      </t-card>

      <t-card title="What is included" class="panel-card">
        <t-space direction="vertical" size="12px">
          <div v-for="item in highlights" :key="item" class="feature-row">
            <t-tag theme="success" variant="light">Ready</t-tag>
            <span>{{ item }}</span>
          </div>
        </t-space>
      </t-card>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  padding: 24px;
  background:
    radial-gradient(circle at top left, rgba(0, 82, 217, 0.12), transparent 24%),
    linear-gradient(180deg, #f7f9fc 0%, #eef3f9 100%);
}

.hero-grid {
  display: grid;
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
}

.hero-card,
.panel-card {
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.05;
}

p {
  margin: 0;
  max-width: 56ch;
  color: #52606d;
  font-size: 16px;
  line-height: 1.7;
}

.feature-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (min-width: 860px) {
  .hero-grid {
    grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.8fr);
    align-items: start;
  }

  .hero-card {
    min-height: 420px;
    display: flex;
    align-items: center;
  }
}
</style>
