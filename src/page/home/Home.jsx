import { Cards1 } from "../../components/cards/Card";
import { Carousel1 } from "../../components/carousel/Carousel";
import { Footer } from "../../components/footer/Footer";
import { Navegador } from "../../components/navegador/Navegador";
import { Info } from "../../components/section/Info";


export function Home () {

  return (
    <div>
      <Navegador/>
      <Carousel1/>
      <Cards1/>
      <h1 className="text-center"> Soy un texto entre medio de todos los componentes (No soy un componente) </h1>
      <Info/>
      <Footer/>
    </div>
  )
};

