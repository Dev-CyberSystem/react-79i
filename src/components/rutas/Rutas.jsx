import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Contador from "../Contador/Contador";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Contador />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Rutas;
