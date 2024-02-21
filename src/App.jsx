import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegador from '../src/components/navegador/Navegador';
import Rutas from './components/rutas/Rutas';

function App() {
  return (
    <>
      <header>
        <Navegador />
      </header>
      <Rutas />
    </>
  );
}

export default App;
