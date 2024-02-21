import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "../src/components/navegador/Navegador.jsx";
import Rutas from "../src/components/rutas/Rutas.jsx";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navegador />
      <Rutas contador={0} />
      <Footer />
    </>
  );
}

// aqui van todos los componentes en comun en todas las páginas

export default App;
