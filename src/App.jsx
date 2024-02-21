import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navegador />
      <Rutas />
      <Footer />
    </>
  );
}

// aqui van todos los componentes en comun en todas las páginas

export default App;
