import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import router from './router'
import './style.css'
import 'tdesign-mobile-react/es/style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>{router}</BrowserRouter>
  </React.StrictMode>,
)
