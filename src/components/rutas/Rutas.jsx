import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Error404 from '../../pages/Error404';
import NuevaPagina from '../../pages/NuevaPagina';
import Productos from '../../pages/Productos';
import Usuarios from '../../pages/Usuarios';

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/NuevaPagina" element={<NuevaPagina />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  );
}

export default Rutas;
