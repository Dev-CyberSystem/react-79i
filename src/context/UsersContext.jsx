import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider value={{ usuarios, getUsers }}>
      {children}
    </UsersProvider.Provider>
  );
};


// const [users, setUsers] = useState([])

//       useEffect(() => {
//         const obtenerDatos = async () => {
//           try {
//             const url = 'https://jsonplaceholder.typicode.com/todos/'
//             const response = await fetch(url)
//             const resultado = await response.json()
//             console.log(resultado)
//             setUsers(response.data);
//           }
//           catch (error) {
//             console.error(error);
//           }
//         }
//         obtenerDatos();
//       }, []);

export default UsersContext;
