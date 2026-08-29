import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Shopping/Cart.jsx'
import './Shopping/Use_Effect.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
