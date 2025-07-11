import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './route/routes.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes}/>
    </CartProvider>
  </StrictMode>,
)
