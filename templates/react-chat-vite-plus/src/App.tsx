import { ChatBot } from '@tdesign-react/chat'
import type { AIMessageContent, ChatServiceConfig, SSEChunkData } from '@tdesign-react/chat'
import { ChatBubbleIcon } from 'tdesign-icons-react'

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
    description: 'Built with React and the TDesign chat component.',
  },
  {
    title: 'Build workflow',
    description: 'Use Vite for instant local startup and production builds.',
  },
  {
    title: 'Next step',
    description: 'Edit chatServiceConfig in src/App.tsx to connect your model service.',
  },
]

export default function App() {
  return (
    <main className="page-shell">
      <section className="content-grid">
        <aside className="intro-panel">
          <p className="eyebrow">
            <ChatBubbleIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            __TEMPLATENAME__
          </p>
          <div className="hero-copy">
            <h1 className="hero-title">AI Chat Starter</h1>
            <p className="hero-intro">
              __PROJECTNAME__ ships with a ready-to-wire chat shell. Connect your
              real model service by updating <code>chatServiceConfig</code> in{' '}
              <code>App.tsx</code>.
            </p>
          </div>
          <div className="section-block">
            <p className="section-heading">Getting started</p>
            <div className="section-list">
              {sections.map((item) => (
                <div key={item.title} className="section-row">
                  <span className="section-row-title">{item.title}</span>
                  <p className="section-row-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="action-row">
            <button type="button" className="primary-action">
              Run pnpm dev
            </button>
            <button type="button" className="secondary-action">
              Edit chatServiceConfig
            </button>
          </div>
        </aside>

        <section className="chat-panel">
          <ChatBot chatServiceConfig={chatServiceConfig} />
        </section>
      </section>
    </main>
  )
}
