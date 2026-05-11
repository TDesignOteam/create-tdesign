import { defineComponent } from 'vue'
export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="intro-panel">
        <p class="eyebrow">__TEMPLATENAME__</p>
        <h1>AI Chat Starter</h1>
        <p class="intro">
          __PROJECTNAME__ ships with the TDesign chat component. Connect your real
          model service by wiring <code>chatServiceConfig</code> in
          <code>App.tsx</code>.
        </p>
      </section>

      <section class="chat-panel">
        <Chatbot defaultMessages={[]} />
      </section>
    </main>
  )
})
