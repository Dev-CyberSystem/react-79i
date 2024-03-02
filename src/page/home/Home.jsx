import { Carousel1 } from "../../components/carousel/Carousel";
import React from 'react'
import { Cards1 } from "../../components/cards/Card";
import { Info } from "../../components/section/Info";
import { ContadorPadreBoton } from "../../components/contador/ContadorPadreBoton";


export function Home () {

  return (
    <>
      <Carousel1 />
      <Cards1 />
      <Info />
      <ContadorPadreBoton/>
    </>
  );
};