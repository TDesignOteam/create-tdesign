import { defineComponent } from 'vue'
import { ChatBubbleIcon } from 'tdesign-icons-vue-next'
import ClientOnlyChat from './ClientOnlyChat.vue'

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
    description: 'Edit chatServiceConfig in pages/index/+Page.tsx to connect your model service.',
  },
]

export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="content-grid">
        <aside class="intro-panel">
          <p class="eyebrow">
            <ChatBubbleIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            __TEMPLATENAME__
          </p>
          <div class="hero-copy">
            <h1 class="hero-title">AI Chat Starter</h1>
            <p class="hero-intro">
              __PROJECTNAME__ ships with an SSR-ready chat shell. Connect your real
              model service by updating <code>chatServiceConfig</code> in{' '}
              <code>pages/index/+Page.tsx</code>.
            </p>
          </div>
          <div class="section-block">
            <p class="section-heading">Getting started</p>
            <div class="section-list">
              {sections.map((item) => (
                <div key={item.title} class="section-row">
                  <span class="section-row-title">{item.title}</span>
                  <p class="section-row-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="action-row">
            <button type="button" class="primary-action">
              Run pnpm dev
            </button>
            <button type="button" class="secondary-action">
              Edit chatServiceConfig
            </button>
          </div>
        </aside>

        <section class="chat-panel">
          <ClientOnlyChat />
        </section>
      </section>
    </main>
  )
})
