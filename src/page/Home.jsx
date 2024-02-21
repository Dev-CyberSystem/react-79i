import Navegador from "../components/navegador/Navegador"
import Footer from "../components/footer/Footer"
import Cards from "../components/cards/Cards"
import Carrousel from "../components/carrousel/Carrousel"
import Section from "../components/section/Section"
import Contador from "../components/contador/Contador"
import { useState } from "react"
const Home = () => {
  const [estado,setEstado] = useState(0) 
 
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
      <Footer/>
      
    </>

  )
}

export default Home