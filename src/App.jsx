import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "../src/components/navegador/Navegador.jsx";
import Rutas from "../src/components/rutas/Rutas.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import ProductosContext from "./context/ProductosContext.jsx";

function App() {
  return (
    <>
      <ProductosContext>
      <Navegador />
      <Rutas contador={0} />
      <Footer />
      </ProductosContext>
    </>
  );
}

// aqui van todos los componentes en comun en todas las páginas

export default App;
