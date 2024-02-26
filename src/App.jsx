import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import ProductosContext from "./context/ProductosContext";

function App() {
  return (
    <>
      <ProductosContext>
        <Navegador />
        <Rutas />
      </ProductosContext>
    </>
  );
}

export default App;
