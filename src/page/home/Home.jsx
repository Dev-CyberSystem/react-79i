import { CardsHome } from "../../components/cards/Cards";
import { CarrouselHome } from "../../components/carrousel/Carrousel";
import { Informacion } from "../../components/informacion/Informacion";
import { Contador } from "../../components/contador/Contador";
import Productos from "../../components/productos/Productos";


export function Home(){
  return (
   <>
    
    <CarrouselHome/>
    <CardsHome/>
    <Informacion/>
    <Productos />
    <Contador />
  </>
   

  );
};

