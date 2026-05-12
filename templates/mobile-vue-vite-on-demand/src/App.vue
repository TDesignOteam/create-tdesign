<script setup lang="ts">
const sections = [
  {
    title: 'Mobile-ready starter',
    description: 'Built with Vue 3, TypeScript, and TDesign Mobile Vue.',
  },
  {
    title: 'Fast local loop',
    description: 'Use Vite for instant dev startup and production builds.',
  },
  {
    title: 'Clean foundation',
    description: 'Start from a minimal app shell and shape the product quickly.',
  },
]
</script>

<template>
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">
        <app-icon style="margin-right: 8px; vertical-align: middle" />
        __TEMPLATENAME__
      </p>
      <h1>Mobile TDesign Starter</h1>
      <p class="intro">
        __PROJECTNAME__ is ready for a fast mobile web prototype with Vue 3 and
        TDesign Mobile.
      </p>
    </section>

    <t-cell-group theme="card">
      <t-cell
        v-for="item in sections"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        arrow
      />
    </t-cell-group>

    <section class="actions">
      <t-button theme="primary" size="large" block>Run pnpm dev</t-button>
      <t-button variant="outline" size="large" block>Start Editing</t-button>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  padding: 20px 16px 32px;
  background:
    radial-gradient(circle at top, rgba(0, 82, 217, 0.14), transparent 26%),
    linear-gradient(180deg, #f8fbff 0%, #eef3f9 100%);
}

.hero {
  margin-bottom: 20px;
  padding: 28px 22px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0f5ae0 0%, #2a86ff 100%);
  color: #fff;
  box-shadow: 0 18px 36px rgba(15, 90, 224, 0.26);
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.82;
}

h1 {
  margin: 0;
  font-size: 32px;
  line-height: 1.05;
}

.intro {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.65;
  opacity: 0.92;
}

.actions {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}
</style>
