import { ChatBot } from '@tdesign-react/chat'

export default function App() {
  return (
    <main className="page-shell">
      <section className="intro-panel">
        <p className="eyebrow">__TEMPLATENAME__</p>
        <h1>AI Chat Starter</h1>
        <p className="intro">
          __PROJECTNAME__ ships with the TDesign chat component. Connect your real
          model service by wiring <code>chatServiceConfig</code> in <code>App.tsx</code>.
        </p>
      </section>

      <section className="chat-panel">
        <ChatBot defaultMessages={[]} />
      </section>
    </main>
  )
}
