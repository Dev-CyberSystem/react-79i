import Navegador from "../components/navegador/Navegador"
import Footer from "../components/footer/Footer"
import Cards from "../components/cards/Cards"
import Carrousel from "../components/carrousel/Carrousel"
import Section from "../components/section/Section"
const Home = () => {
  return (
    <>
    {/* 
      Landing page
      -Navbar
      -carrousel
      -cards
      -section (Informacion)
    -footer */}
      
      <Navegador/>
      <Carrousel/>
      <Cards/>
      <Section/>
      <Footer/>
      
    </>

  )
}

export default Home