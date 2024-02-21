import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navegador } from "./components/navegador/Navegador";
import { Footer } from "./components/footer/Footer";
import { Rutas } from "./components/rutas/Rutas";


function App() {
  return (
    <>
      <Navegador/>
      <Rutas/>
      <Footer/>
    </>
  );
}

export default App;
