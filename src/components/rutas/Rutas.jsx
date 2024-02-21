import {Routes , Route} from 'react-router-dom';
import { Home } from '../../page/home/Home';
import { Nosotros} from '../../page/nosotros/Nosotros';
import { NotFound } from '../404/NotFound';
import { Empresas } from "../../page/asesoria/Empresas";
import { Personal} from '../../page/asesoria/Personal';
import { Curriculum } from '../../page/asesoria/Curriculum'


const Rutas = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/asesoriaEmpresas" element={<Empresas />} />
    <Route path="/asesoriaPersonal" element={<Personal />} />
    <Route path="/ascesoriaCurriculum" element={<Curriculum />} />
    <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  )
}

export default Rutas