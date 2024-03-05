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

  const addUser = async (usuario) => {
    try {
      await axios.post("http://localhost:8000/users", usuario);
      await getUsers(); //actualizar la lista de usuarios
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/" ;
  }



  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider value={{ usuarios, getUsers, addUser, logOut }}>
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;
