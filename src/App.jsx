import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador.jsx";
import Rutas from "./routes/Rutas.jsx";
function App() {
  return (
    <>
      <Navegador/>
      <Rutas/>
    </>
  );
}

export default App;
