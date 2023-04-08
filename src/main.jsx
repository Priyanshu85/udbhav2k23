import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MouseTrail from './components/shared/MouseTrail'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MouseTrail/>
  </React.StrictMode>,
)
