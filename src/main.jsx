import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nContextProvider } from './context/I18nContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nContextProvider>
      <App />
    </I18nContextProvider>
  </React.StrictMode>,
)
