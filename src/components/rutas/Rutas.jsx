import { Routes, Route } from 'react-router-dom';
import Home from '../../page/home/Home';
import Error404 from '../../pages/Error404';
import NuevaPagina from '../../pages/NuevaPagina';
import Productos from '../../pages/Productos';
function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/NuevaPagina" element={<NuevaPagina />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Rutas;
