import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
    <h1>Error 404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que estás buscando no existe. Puede que la dirección sea incorrecta o que la página haya sido eliminada.</p>
    <p>Por favor, verifica la URL o regresa a la página de inicio. Si el problema persiste, ponte en contacto con nuestro equipo de soporte.</p>
    <Link to="/">Home</Link>
  </div>
  )
}

export default Error
