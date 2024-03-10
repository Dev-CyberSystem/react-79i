import "bootstrap/dist/css/bootstrap.min.css"; /* importar estilos de react bootstrap*/
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Footer from "./components/footer/Footer";
import Carrusel from "./components/carrusel/Carrusel";
import Card from "./components/cards/Cards";
/*import React from 'react' Se importa como componente*/
/*import {useState} from 'react' Se importa como funcionalidad*/


function App() {
  return (
    /*El fragment no ocupa lugar en memoria como un Div*/ 
    <>
    <Navegador/>
    <Carrusel/>
    <Card/>

    <Footer/>
    
      {/*NAVBAR 
      {  CARROUSEL
        CARDS
        SECTION(INFO)

        Hacer todo dentro de page/home

        secarlo desde dev no desde master

      */}
    </>
  );
}

export default App;
