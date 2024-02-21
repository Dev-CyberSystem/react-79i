import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home.jsx";
import Contador from "../../page/contador/Contador.jsx";

const Rutas = ({contador}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contador" element={<Contador contador={0} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Rutas;
