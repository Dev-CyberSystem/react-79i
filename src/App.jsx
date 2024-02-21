import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";

function App() {
  return (
    <>
      <Navegador />
      <Home />
      {/* <Rutas /> */}
      <Footer />
    </>
  );
}

// aqui van todos los componentes en comun en todas las paginas

export default App;
