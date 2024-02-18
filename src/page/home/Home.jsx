import { CardsHome } from "../../components/cards/Cards";
import { CarrouselHome } from "../../components/carrousel/Carrousel";
import { Footer } from "../../components/footer/Footer";
import { Informacion } from "../../components/informacion/Informacion";
import { Navegador } from "../../components/navegador/Navegador";


export function Home(){
  return (
   <div>
    
    <Navegador/>
    <CarrouselHome/>
    <CardsHome/>
    <Informacion/>
    <Footer/>
   </div>

  );
};

