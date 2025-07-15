import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './route/routes.jsx'
import { ContextWrapper } from './context/ContextWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextWrapper>
      <RouterProvider router={routes}/>
    </ContextWrapper>
  </StrictMode>,
)
