import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegador from '../src/components/navegador/Navegador';
import Rutas from './components/rutas/Rutas';
import UsuariosContext from './context/UsuariosContext';

function App() {
  return (
    <>
      <UsuariosContext>
        <header>
          <Navegador />
        </header>
        <Rutas />
      </UsuariosContext>
    </>
  );
}

export default App;
