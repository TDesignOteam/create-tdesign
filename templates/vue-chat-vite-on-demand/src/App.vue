<script setup lang="ts">
const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3 and the TDesign chat component.',
  },
  {
    title: 'Build workflow',
    description: 'Use Vite for instant local startup and production builds.',
  },
  {
    title: 'Next step',
    description: 'Edit chatServiceConfig in src/App.vue to connect your model service.',
  },
]
</script>

<template>
  <main class="page-shell">
    <section class="content-grid">
      <aside class="intro-panel">
        <p class="eyebrow">
          <chat-bubble-icon style="margin-right: 8px; vertical-align: middle" />
          __TEMPLATENAME__
        </p>
        <div class="hero-copy">
          <h1 class="hero-title">AI Chat Starter</h1>
          <p class="hero-intro">
            __PROJECTNAME__ ships with a ready-to-wire chat shell. Connect your
            real model service by updating <code>chatServiceConfig</code> in
            <code>App.vue</code>.
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
        <Chatbot :default-messages="[]" />
      </section>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  padding: 20px;
  background:
    radial-gradient(circle at top, rgba(74, 111, 255, 0.16), transparent 24%),
    linear-gradient(180deg, #f7f9fe 0%, #edf2fb 100%);
}

.content-grid {
  display: grid;
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
}

.intro-panel {
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(14px);
  display: grid;
  gap: 20px;
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
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.05;
}

.hero-intro {
  margin: 0;
  max-width: 60ch;
  color: #52606d;
  font-size: 16px;
  line-height: 1.7;
}

.section-block {
  display: grid;
  gap: 16px;
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

.action-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-action,
.secondary-action {
  appearance: none;
  border-radius: 999px;
  padding: 12px 18px;
  font: inherit;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.primary-action {
  border: 1px solid transparent;
  background: #315efb;
  color: #fff;
  box-shadow: 0 12px 24px rgba(49, 94, 251, 0.24);
}

.secondary-action {
  border: 1px solid rgba(49, 94, 251, 0.2);
  background: rgba(255, 255, 255, 0.88);
  color: #315efb;
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-1px);
}

.chat-panel {
  height: min(72vh, 680px);
  padding: 12px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.chat-panel :deep(t-chatbot) {
  display: block;
  height: 100%;
}

@media (min-width: 980px) {
  .content-grid {
    grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.4fr);
    align-items: stretch;
  }
}
</style>
