import Cards from "../../components/cards/Cards.jsx"
import Carrousel from "../../components/carrousel/Carrousel.jsx"
import Section from "../../components/section/Section.jsx"
import { useState, useEffect } from "react"
import axios from "axios"
import Productos from "../../components/productos/Productos.jsx"

const Home = () => {

  const [productos, setProductos] = useState([]) //para almacenar los datos que recibo desde el array de objetos - inicializo mi estado como un array vacio

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await axios.get("http://localhost:8000/productos") //guardo el llamado en una constante llamada "respuesta"
        //console.log(respuesta.data); puedo utilizar respuesta.data[0] por ej. y esto me devuelve los datos que estan ubicados en esa posición
        setProductos (respuesta.data);
      }
      catch (error){ //utilizo try catch para manejar los errores y como estoy llamando datos desde axios, trabajando con una fakeApi 
        console.log(error) //manejo los datos de manera asincronica con async-await
      }
    }
    obtenerDatos()
  }, []); //dependencia

  console.log(productos)

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json)) 

  return (
    <>
    <section>
      <Carrousel />
    </section>
    <section>
      <Section />
      <h2 className="text-center">Tarea tres</h2>
      <Productos productos={productos}/>
      <Cards />
    </section>
    </>
  )
}

export default Home
