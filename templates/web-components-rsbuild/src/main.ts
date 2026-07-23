import { initializeApp } from './client'
import { pageHtml } from './page'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = pageHtml
initializeApp()
