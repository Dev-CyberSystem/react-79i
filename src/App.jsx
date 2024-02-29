import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegador from "./components/navegador/Navegador.jsx";
import Rutas from "./routes/Rutas.jsx";
import UsersContext from "./contextProvider/UsersContext.jsx";
function App() {
  return (
    <>
      <UsersContext>
        
          <Navegador/>
          <Rutas/>
        
      </UsersContext>
    </>
  );
}

export default App;
