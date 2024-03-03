/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const userProvider = createContext();

const UsersContext = ({ children }) => {
  const [users, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        const result = response.data;
        return setUsuarios(result);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <userProvider.Provider value={users}>{children}</userProvider.Provider>
  );
};

export default UsersContext;
