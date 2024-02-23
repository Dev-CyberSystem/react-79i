import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Footer from "./components/footer/Footer";
import Carrusel from "./components/carrusel/Carrusel";
import { Productos } from "./components/productos/Productos";



function App() {
  return (
    <>
      <Navegador/>
      <Carrusel/>
      <Productos/>
      <Footer/>
    </>
  );
}

export default App;
