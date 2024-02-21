import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // Para importar TODO un componente(para usar solo una funcionalidad, '{}')
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* //hace el manejo de warnings en la aplicacion, puedo sacarlo */}
    <App />
  </React.StrictMode>,
)
