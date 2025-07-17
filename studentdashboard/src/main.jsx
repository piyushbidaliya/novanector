import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import studentRoutes from './route/studentRoutes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={studentRoutes}/>
  </StrictMode>,
)
