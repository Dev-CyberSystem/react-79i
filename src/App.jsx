import Footer from "./components/footer/Footer"
import Navegador from "./components/navegador/Navegador"
import Rutas from "./components/routes/Rutas"
import ProductosContext from "./context/ProductosContext"
import UsuariosContext from "./context/UsuariosContext"



function App() { // Ahora este componente contiene el estado y el controlador de evento 'handleClick'. Ambos pasan como 'props' a c/u de los botones
  
  // AQUI VAN LOS COMPONENTES QUE SON COMUNES A TODAS LAS PAGES DE MI PAGINA

  return (
    <>
      <UsuariosContext>
      <ProductosContext>
        <Navegador />
        <Rutas />
        <Footer /> 
      </ProductosContext>
      </UsuariosContext>
    </>



  )
}

export default App // Con 'default' se exporta todo
