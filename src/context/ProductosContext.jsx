import { createContext } from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const productosProvider = createContext()

const ProductosContext = ({ children }) => {

  const [productos, setProductos] = useState([]) //para almacenar los datos que recibo desde el array de objetos - inicializo mi estado como un array vacio

  const obtenerDatos = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8000/productos") //guardo el llamado en una constante llamada "respuesta"
      //console.log(respuesta.data); puedo utilizar respuesta.data[0] por ej. y esto me devuelve los datos que estan ubicados en esa posición
      setProductos(respuesta.data);
    }
    catch (error) { //utilizo try catch para manejar los errores y como estoy llamando datos desde axios, trabajando con una fakeApi 
      console.log(error) //manejo los datos de manera asincronica con async-await
    }
  }

  const addProductos = async (producto) => {
    try {
      const respuestaTres = await axios.post("http://localhost:8000/productos", producto)
      setProductos ([...producto, respuestaTres.data]);
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    obtenerDatos()
  }, []); //dependencia

  console.log(productos)

  return (
    <productosProvider.Provider value={{ productos, addProductos }}>
      {children}
    </productosProvider.Provider>
  )
}

export default ProductosContext