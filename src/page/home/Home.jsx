import { CardsHome } from "../../components/cards/Cards";
import { CarrouselHome } from "../../components/carrousel/Carrousel";
import { Navegador } from "../../components/navegador/Navegador";

export function Home(){
  return (
   <div>
    
    <Navegador/>
    <CarrouselHome/>
    <CardsHome/>
   </div>

  )
}

