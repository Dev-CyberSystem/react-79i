import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../page/Home.jsx'
import Error from '../page/Error.jsx'
import Contador from '../components/contador/Contador.jsx'
import Usuarios from '../components/usuarios/Usuarios.jsx'
const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/contador' element={<Contador/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/>
    </Routes>
  )
}

export default Rutas
