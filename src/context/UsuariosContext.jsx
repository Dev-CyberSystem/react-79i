import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const usuariosProvider = createContext()

const UsuariosContext = ({ children }) => {

    const [usuarios, setusuarios] = useState([])

    const obtenerUsuarios = async () => {
        try {
            const segundaRespuesta = await axios.get("http://localhost:8000/usuarios") //guardo el llamado en una constante llamada "segundaRespuesta"
            //console.log(segundaRespuesta.data); puedo utilizar segundaRespuesta.data[0] por ej. y esto me devuelve los datos que estan ubicados en esa posición
            setusuarios(segundaRespuesta.data);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerUsuarios()
    }, []);

    console.log(usuarios)

    return (
        <usuariosProvider.Provider value={{ usuarios, obtenerUsuarios }}>
            {children}
        </usuariosProvider.Provider>
    )
}

export default UsuariosContext