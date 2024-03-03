import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home.jsx";
import Contador from "../../page/contador/Contador.jsx";
import Administrador from "../../page/administrador/Administrador.jsx";

const Rutas = ({contador}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contador" element={<Contador contador={0} />} />
        <Route path="/Administrador" element={<Administrador />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Rutas;
