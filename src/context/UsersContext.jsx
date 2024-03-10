/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const userProvider = createContext();

const UsersContext = ({ children }) => {
  const [users, setUsuarios] = useState([]);

  //Obtener los datos de Usuarios
  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      const result = response.data;
      return setUsuarios(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Post para alimentar nuestra base de datos de Usuarios

  const addUser = async (producto) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/users',
        producto
      );

      setUsuarios([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete para eliminar un usuario de la base de datos.
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      return setUsuarios(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Put para actualizar un producto de la base de datos.
  const updateUser = async (user) => {
    try {
      await axios.put(`http://localhost:8000/users/${user.id}`, user);

      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (user) => {
    try {
      await axios.put(`http://localhost:8000/users/${user.id}`, user);
      await getUsers();
    } catch (error) {
      console.log('Error al Editar Usuario', error);
    }
  };

  const logOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <userProvider.Provider
      value={{ users, addUser, deleteUser, updateUser, logOut, editUser }}
    >
      {children}
    </userProvider.Provider>
  );
};

export default UsersContext;
