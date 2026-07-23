import 'tdesign-web-components/lib/style/index.css'
import 'tdesign-web-components/lib/button/index.js'
import 'tdesign-icons-web-components/esm/components/app.js'
import 'tdesign-icons-web-components/esm/components/book-open.js'
import 'tdesign-icons-web-components/esm/components/browse.js'
import 'tdesign-icons-web-components/esm/components/chevron-right.js'
import 'tdesign-icons-web-components/esm/components/code.js'
import 'tdesign-icons-web-components/esm/components/component-grid.js'
import 'tdesign-icons-web-components/esm/components/logo-github.js'
import 'tdesign-icons-web-components/esm/components/moon.js'
import 'tdesign-icons-web-components/esm/components/sunny.js'

type Theme = 'light' | 'dark'

const themeKey = 'tdesign-starter-theme'

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(themeKey)
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('theme-mode', theme)
  const toggle = document.querySelector<HTMLElement>('#theme-toggle')
  toggle?.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  )
}

export function initializeApp() {
  let theme = getInitialTheme()
  applyTheme(theme)

  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(themeKey, theme)
    applyTheme(theme)
  })
}
