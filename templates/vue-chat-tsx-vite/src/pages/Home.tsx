import { defineComponent } from 'vue'
import { Chatbot } from '@tdesign-vue-next/chat'
import { ChatBubbleIcon } from 'tdesign-icons-vue-next'
import type { AIMessageContent, ChatServiceConfig, SSEChunkData } from '@tdesign-vue-next/chat'

const chatServiceConfig: ChatServiceConfig = {
  endpoint: 'https://1257786608-9i9j1kpa67.ap-guangzhou.tencentscf.com/sse/normal',
  stream: true,
  onMessage: (chunk: SSEChunkData): AIMessageContent => {
    const data = chunk.data as { msg?: string } | undefined

    return {
      type: 'markdown',
      data: data?.msg ?? '',
    }
  },
}

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
    description: 'Edit chatServiceConfig in src/pages/Home.tsx to connect your model service.',
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
              __PROJECTNAME__ ships with a ready-to-wire chat shell. Connect your
              real model service by updating <code>chatServiceConfig</code> in{' '}
              <code>src/pages/Home.tsx</code>.
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
          <Chatbot chatServiceConfig={chatServiceConfig} />
        </section>
      </section>
    </main>
  )
})
