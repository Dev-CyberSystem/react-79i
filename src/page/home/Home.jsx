import { Navegador } from "../../components/navegador/Navegador";
import { Carousel1 } from "../../components/carousel/Carousel";
import { Footer } from "../../components/footer/Footer";
import React from 'react'
import { Cards1 } from "../../components/cards/Card";
import { Info } from "../../components/section/Info";
import { ContadorPadreBoton } from "../../components/contador/ContadorPadreBoton";

export function Home () {
  return (
    <>
       {/* <Navegador/>
      <Carousel1/>
      <Cards1/>
      <h1 className="text-center"> Soy un texto entre medio de todos los componentes (No soy un componente) </h1>
      <Info/>
      <Footer/> */}
      <Carousel1 />
      <Cards1 />
      <Info />
      <ContadorPadreBoton/>
    </>
  );
};