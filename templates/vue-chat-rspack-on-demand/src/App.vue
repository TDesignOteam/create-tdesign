<script setup lang="ts">

</script>

<template>
  <main class="page-shell">
    <section class="intro-panel">
      <p class="eyebrow">__TEMPLATENAME__</p>
      <h1>AI Chat Starter</h1>
      <p class="intro">
        __PROJECTNAME__ ships with the TDesign chat component. Connect your real
        model service by wiring <code>chatServiceConfig</code> in
        <code>App.vue</code>.
      </p>
    </section>

    <section class="chat-panel">
      <Chatbot :default-messages="[]" />
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

.intro-panel {
  max-width: 960px;
  margin: 0 auto 16px;
  padding: 24px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(14px);
}

.eyebrow {
  margin: 0 0 10px;
  color: #315efb;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.05;
}

.intro {
  margin: 14px 0 0;
  max-width: 60ch;
  color: #52606d;
  font-size: 16px;
  line-height: 1.7;
}

.chat-panel {
  max-width: 960px;
  height: min(72vh, 680px);
  margin: 0 auto;
  padding: 12px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.chat-panel :deep(t-chatbot) {
  display: block;
  height: 100%;
}
</style>
