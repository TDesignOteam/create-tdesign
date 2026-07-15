import { useEffect, useState } from 'react'
import { ChatBot } from '@tdesign-react/chat'
import {
  BookOpenIcon,
  ComponentGridIcon,
  LogoGithubIcon,
  MoonIcon,
  SunnyIcon,
} from 'tdesign-icons-react'
import type { AIMessageContent, ChatServiceConfig, SSEChunkData } from '@tdesign-react/chat'
import logoDark from '../assets/TDesign-logo_dark.png'
import logoLight from '../assets/TDesign-logo_light.png'

type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'tdesign-chat-theme'

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

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const isDark = theme === 'dark'

  const applyTheme = (value: ThemeMode) => {
    setTheme(value)
    document.documentElement.setAttribute('theme-mode', value)
  }

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem(THEME_KEY)
    const initialTheme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : colorScheme.matches
          ? 'dark'
          : 'light'
    applyTheme(initialTheme)

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(event.matches ? 'dark' : 'light')
    }

    colorScheme.addEventListener('change', syncSystemTheme)
    return () => colorScheme.removeEventListener('change', syncSystemTheme)
  }, [])

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <a className="brand" href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
            <img className="brand-logo" src={isDark ? logoDark : logoLight} alt="TDesign" />
            <span className="brand-divider" aria-hidden="true" />
            <span className="product-name">AI Chat Starter</span>
          </a>

          <div className="template-tags" aria-label="Template status">
            <span className="template-tag">__TEMPLATENAME__</span>
            <span className="online-tag">
              <i aria-hidden="true" />
              Online
            </span>
          </div>

          <nav className="header-actions" aria-label="Resources">
            <a className="nav-action" href="/dependencies">
              <ComponentGridIcon />
              <span>Dependencies</span>
            </a>
            <a
              className="nav-action"
              href="https://tdesign.tencent.com/chat/getting-started"
              target="_blank"
              rel="noreferrer"
            >
              <BookOpenIcon />
              <span>Docs</span>
            </a>
            <a
              className="nav-action"
              href="https://github.com/Tencent/tdesign"
              target="_blank"
              rel="noreferrer"
            >
              <LogoGithubIcon />
              <span>GitHub</span>
            </a>
            <button
              type="button"
              className="theme-button"
              aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
              title={isDark ? 'Use light theme' : 'Use dark theme'}
              onClick={toggleTheme}
            >
              {isDark ? <SunnyIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      </header>

      <div className="workspace-grid">
        <section className="chat-panel" aria-label="AI chat workspace">
          <div className="chat-panel-heading">
            <div>
              <span className="status-dot" aria-hidden="true" />
              Assistant
            </div>
            <span>Streaming ready</span>
          </div>
          <div className="chatbot-host">
            <ChatBot chatServiceConfig={chatServiceConfig} />
          </div>
        </section>

        <aside className="setup-panel">
          <div className="setup-heading">
            <span className="eyebrow">Starter configuration</span>
            <h1>Build on a working chat foundation</h1>
            <p>
              Chatbot is connected to a streaming SSE service and maps each response to markdown.
            </p>
          </div>

          <dl className="config-list">
            <div>
              <dt>Transport</dt>
              <dd>SSE stream</dd>
            </div>
            <div>
              <dt>Response</dt>
              <dd>Markdown</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>
                <span className="status-dot" aria-hidden="true" />
                Remote endpoint
              </dd>
            </div>
          </dl>

          <div className="command-block">
            <span>Start locally</span>
            <code>__DEVCOMMAND__</code>
          </div>

          <p className="setup-note">
            Update <code>chatServiceConfig</code> when your model service is ready.
          </p>
        </aside>
      </div>
    </main>
  )
}
