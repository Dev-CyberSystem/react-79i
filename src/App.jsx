import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navegador } from "./components/navegador/Navegador";
import { Footer } from "./components/footer/Footer";
import { Rutas } from "./components/rutas/Rutas";
import ProductosContext from "./context/ProductosContext";


function App() {
  return (
    <>
  {/* Agregar el context de usuarios */}
    <ProductosContext>
    <Navegador/>
      <Rutas/>
      <Footer/>
    </ProductosContext>
  {/* Agregar el context de usuarios */}
    </>
  );
}

export default App;
