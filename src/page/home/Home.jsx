import "bootstrap/dist/css/bootstrap.min.css"; /* importar estilos de react bootstrap*/
import Navegador from "../../components/navegador/Navegador";
import Footer from "../../components/footer/Footer";
import Carrusel from "../../components/carrusel/Carrusel";
import Card from "../../components/cards/Cards";

const Home = () => {
  return (
    /*El fragment no ocupa lugar en memoria como un Div*/ 
    <>
      <Navegador/>
      <Carrusel/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Home