import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@tdesign-react/chat/es/style/index.js'
import App from './App'
import router from './router'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>{router}</BrowserRouter>
  </React.StrictMode>,
)
