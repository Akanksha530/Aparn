import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserConext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserConext>
    <App/>
  </UserConext>
  ,
)
