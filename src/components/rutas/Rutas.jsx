import {Router, Route, Routes} from "react-router-dom"
import Home from "../../page/home/home/Home";
import { Productos } from "../../page/home/productos/Productos";
import Nosotros from "../../page/home/nosotros/Nosotros";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="*" element={<h1>error 404</h1>}/>
      </Routes>
    </>
  );
};

export default Rutas;
