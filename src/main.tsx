import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from './context.tsx'
import App from './App.tsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
