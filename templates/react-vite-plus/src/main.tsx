import React from 'react'
import ReactDOM from 'react-dom/client'
import TDesign from 'tdesign-react'
import 'tdesign-react/es/style/index.css'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TDesign>
      <App />
    </TDesign>
  </React.StrictMode>,
)
