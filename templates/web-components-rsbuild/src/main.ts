import { initializeApp } from './client'
import { pageHtml, projectName } from './page'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = pageHtml
document.title = projectName
initializeApp()
