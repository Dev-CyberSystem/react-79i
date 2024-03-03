/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const userContext = createContext();

const UsuariosContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('/src/database/juegos.json');
      const resultado = response.data;
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <userContext.Provider value={usuarios}>{children}</userContext.Provider>
  );
};

export default UsuariosContext;
