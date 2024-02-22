import Navegador from "../components/navegador/Navegador"
import Footer from "../components/footer/Footer"
import Cards from "../components/cards/Cards"
import Carrousel from "../components/carrousel/Carrousel"
import Section from "../components/section/Section"
import Contador from "../components/contador/Contador"
import Usuarios from "../components/usuarios/Usuarios"
import { useState,useEffect } from "react"
import axios from "axios"
const Home = () => {
  const [estado,setEstado] = useState(0) 
  const [usuarios,setUsuarios]=useState([])
  const url ="https://jsonplaceholder.typicode.com/users"
  const obteniendoUsuarios = async ()=>{
    try{
      const response = await axios.get(url)
      setUsuarios(response.data)
      console.log(response)
    }
    catch{
      console.log("error")
    }
  }
  useEffect(
    ()=>{
      obteniendoUsuarios()
   },
  [])

  return (
    <>
      
      <Navegador/>
      <Carrousel/>
      <Cards/>
      <Section/>
      <Contador 
    estado={estado}
    sumandoUno={estado >= 0 ? ()=>{setEstado(estado+1)} : ()=>{setEstado(0)}} 
    restandoUno = {estado >0 ? ()=>{setEstado(estado-1)} : ()=>{setEstado(0)}}
    />
    {
          usuarios.map(u=>{
           return <Usuarios email ={u.email}nombre={u.name} id={u.id}/>
          })
      }
      <Footer/>
      
    </>

  )
}

export default Home