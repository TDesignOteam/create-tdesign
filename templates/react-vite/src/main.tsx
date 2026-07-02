import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import 'tdesign-react/es/style/index.css'
import App from './App'
import router from './router'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>{router}</BrowserRouter>
  </React.StrictMode>,
)
