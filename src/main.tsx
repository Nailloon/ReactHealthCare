import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
