import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import adminRoutes from './route/adminRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={adminRoutes}/>
  </StrictMode>,
)
