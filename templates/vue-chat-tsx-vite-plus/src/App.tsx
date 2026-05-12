import { defineComponent } from 'vue'
import { Chatbot } from '@tdesign-vue-next/chat'
import { ChatBubbleIcon } from 'tdesign-icons-vue-next'

export default defineComponent({
  setup() {
    const sections = [
      {
        title: 'Starter stack',
        description: 'Built with Vue 3 and the TDesign chat component.',
      },
      {
        title: 'Build workflow',
        description: 'Use Vite Plus for instant local startup, linting, formatting, and production builds.',
      },
      {
        title: 'Next step',
        description: 'Edit chatServiceConfig in src/App.tsx to connect your model service.',
      },
    ]

    return () => (
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
                __PROJECTNAME__ ships with a ready-to-wire chat shell. Connect your
                real model service by updating <code>chatServiceConfig</code> in
                <code>App.tsx</code>.
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
              <button type="button" class="primary-action">Run vp dev</button>
              <button type="button" class="secondary-action">Edit chatServiceConfig</button>
            </div>
          </aside>

          <section class="chat-panel">
            <Chatbot defaultMessages={[]} />
          </section>
        </section>
      </main>
    )
  },
})
