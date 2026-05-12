<script setup lang="ts">
const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, TypeScript, and TDesign desktop components.',
  },
  {
    title: 'Build workflow',
    description: 'Use Vite for instant local startup and production builds.',
  },
  {
    title: 'Next step',
    description: 'Open src/App.vue and start shaping __PROJECTNAME__.',
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
              TypeScript, and TDesign.
            </p>
          </div>
          <div class="action-row">
            <t-button theme="primary">Run pnpm dev</t-button>
            <t-button variant="outline">Open src/App.vue</t-button>
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

.eyebrow,
.section-heading {
  margin: 0;
  color: #315efb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy {
  display: grid;
  gap: 12px;
}

.hero-title {
  margin: 0;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.05;
}

.hero-intro {
  margin: 0;
  max-width: 56ch;
  color: #52606d;
  font-size: 16px;
  line-height: 1.7;
}

.action-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.section-block {
  display: grid;
  gap: 20px;
}

.section-list {
  display: grid;
  gap: 16px;
}

.section-row {
  display: grid;
  gap: 6px;
}

.section-row-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.section-row-description {
  margin: 0;
  color: #52606d;
  font-size: 15px;
  line-height: 1.65;
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
