import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador";
import Rutas from "./components/rutas/Rutas";
import ProductosContext from "./context/ProductosContext";
import UsersContext from "./context/UsersContext";

function App() {
  return (
    <>
      <UsersContext>
        <ProductosContext>
          <Navegador />
          <Rutas />
        </ProductosContext>
      </UsersContext>
    </>
  );
}

export default App;
