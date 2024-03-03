import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegador from '../src/components/navegador/Navegador';
import Rutas from './components/rutas/Rutas';
import UsersContext from './context/UsersContext';

function App() {
  return (
    <>
      <UsersContext>
        <header>
          <Navegador />
        </header>
        <Rutas />
      </UsersContext>
    </>
  );
}

export default App;
