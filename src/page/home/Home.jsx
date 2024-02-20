import { useState } from "react";
import Productos from "../../components/productos/Productos";

const Home = () => {

  //Hooks de estado. 
  // Que es un estado? Es un objeto que contiene propiedades que son relevantes para el componente. y pueden cambiar a lo largo de la vida del componente.
  // Que es un hook? Es una funcion que permite agregar caracteristicas a un componente funcional.

  // useState  Inicializa el estado del componente y obtiene el valor actual
  // const [state, setState] = useState(initialState);
  const [count, setCount] = useState();

  console.log(count, "estado inicial del contador")

  //useEffect
  //useContext
  //useReducer
  //useRef
  //Podemos hacer custom hooks. 

  const funcionProps = () => {
    console.log("Me ejecutaron desde el componente Productos");
  };

  const club = {
    nombre: "River",
    estadio: "Monumental",
  
  };

  return (
    <>
      <h1>Home</h1>

      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>


      <Productos name="Diego" edad="37" apellido funcionProps={funcionProps} club={club}/>
    </>
  );
};

export default Home;
