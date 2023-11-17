import React from 'react'
import ReactDOM from 'react-dom/client'

import App2 from './App2.jsx'
import App from './App.jsx'
import App3 from './App3.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App2 />
    <App />
    <App2 />
    <App3 />
  </React.StrictMode>,
)
