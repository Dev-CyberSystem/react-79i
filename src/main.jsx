import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // Para importar TODO un componente(para usar solo una funcionalidad, '{}')
import './index.css'
import { BrowserRouter as Rutas } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Rutas> {/** Si el 'Routes' Nos creaba un mundo, este un universo
   *  Envuelve a toda la app, para que las routes esten diponibles en cualquier lugar de la app.
  */}
    <React.StrictMode> {/* //hace el manejo de warnings en la aplicacion, puedo sacarlo */}
      <App />
    </React.StrictMode>

  </Rutas>
)
