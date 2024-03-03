/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const userContext = createContext();

const UsuariosContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setUsuarios(resultado);
      } catch (error) {
        console.log('Ocurrió un error');
      }
    };
    fetchData();
  }, []);

  return (
    <userContext.Provider value={usuarios}>{children}</userContext.Provider>
  );
};

export default UsuariosContext;
