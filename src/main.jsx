import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>,
  </BrowserRouter>
)
