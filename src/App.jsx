import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navegador } from "./components/navegador/Navegador";
import { Footer } from "./components/footer/Footer";
import Rutas from "./components/rutas/Rutas";
import ProductosContext from "./context/ProductosContext";

function App() {
  return (              /* Estos son los children de mi context ProductosContext */
    <>
      <ProductosContext>
      <Navegador /> 
      <Rutas />
      <Footer />
      </ProductosContext>
    </>
  );
}

export default App;
