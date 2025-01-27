import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ShopcontextProvider from './context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ShopcontextProvider>
    <App />

    </ShopcontextProvider>

    </BrowserRouter>
  </StrictMode>,
)
