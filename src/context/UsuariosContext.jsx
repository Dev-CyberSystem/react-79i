import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const usuariosProvider = createContext()

const UsuariosContext = ({children}) => {

    const [usuarios, setusuarios] = useState([]) //para almacenar los datos que recibo desde el array de objetos - inicializo mi estado como un array vacio

    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const segundaRespuesta = await axios.get("http://localhost:8000/usuarios") //guardo el llamado en una constante llamada "segundaRespuesta"
          //console.log(segundaRespuesta.data); puedo utilizar segundaRespuesta.data[0] por ej. y esto me devuelve los datos que estan ubicados en esa posición
          setusuarios (segundaRespuesta.data);
        }
        catch (error){ //utilizo try catch para manejar los errores y como estoy llamando datos desde axios, trabajando con una fakeApi 
          console.log(error) //manejo los datos de manera asincronica con async-await
        }
      }
      obtenerDatos()
    }, []); //dependencia
  
    console.log(usuarios)

    return (
        <usuariosProvider.Provider value= {{ usuarios }}>
            {children}
        </usuariosProvider.Provider>
    )
}

export default UsuariosContext