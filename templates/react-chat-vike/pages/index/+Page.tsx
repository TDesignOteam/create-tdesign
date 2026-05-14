import { ChatBubbleIcon } from 'tdesign-icons-react'
import { ClientOnly } from 'vike-react/ClientOnly'
import ChatPanel from './ChatPanel'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with React, Vike, and the TDesign chat component.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready chat shell powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Edit chatServiceConfig in pages/index/ChatPanel.tsx to connect your model service.',
  },
]

export default function Page() {
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
              __PROJECTNAME__ ships with an SSR-ready chat shell. Connect your real
              model service by updating <code>chatServiceConfig</code> in{' '}
              <code>pages/index/ChatPanel.tsx</code>.
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
          <ClientOnly fallback={<div className="chat-placeholder">Hydrating chat workspace...</div>}>
            <ChatPanel />
          </ClientOnly>
        </section>
      </section>
    </main>
  )
}
