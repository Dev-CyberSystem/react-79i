import { CardsHome } from "../../components/cards/Cards";
import { CarrouselHome } from "../../components/carrousel/Carrousel";
import { Informacion } from "../../components/informacion/Informacion";



export function Home(){
  return (
   <>
    
    <CarrouselHome/>
    <CardsHome/>
    <Informacion/>
  </>
   

  );
};

