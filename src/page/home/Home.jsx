import { useEffect, useState } from "react";
import axios from "axios";
// import Productos from "../../components/productos/Productos";

const Home = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])

  //Hooks de estado.
  // Que es un estado? Es un objeto que contiene propiedades que son relevantes para el componente. y pueden cambiar a lo largo de la vida del componente.
  // Que es un hook? Es una funcion que permite agregar caracteristicas a un componente funcional.

  // useState  Inicializa el estado del componente y obtiene el valor actual
  // const [state, setState] = useState(initialState);

  //useEffect
  //Que es useEffect? Es una funcion que permite agregar efectos secundarios a un componente funcional.

  //Sintaxis   useEffect( () => {
  //codigo
  // },[dependencias])

  // useEffect(() => {
  //   console.log("Soy el useEffect");
  // }, []);

  // useEffect(() => {
  //   console.log("Soy el useEffect con dependencia");
  // }, [count]);

  // useEffect(() => {
  //   console.log("Se monto el componente")
  
  //   return () => {
  //     console.log("Se desmonto el componente")
  //   }
  // }, [count])
  
  const funcionProps = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users");
        setUsers(response.data);
      }
      catch (error) {
        console.error(error);
      }
    }
    obtenerDatos();
  }, [count]);

console.log(users, "usuarios")
  

  return (
    <>
      <h1>Home</h1>

      <h2> Contador: {count} </h2>

      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={funcionProps}>Disminuir</button>
      {/* <Productos name="Diego" edad={37} funcionProps={funcionProps} /> */}
    </>
  );
};

export default Home;
