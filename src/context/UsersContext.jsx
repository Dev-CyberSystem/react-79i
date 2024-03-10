import { createContext, useState, useEffect } from "react"
import axios from "axios";


export const UsersProvider = createContext();



const UsersContext = ({children}) => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsers = async () =>{
        try{    
            const response = await axios.get ("http://localhost:8000/users");
            setUsuarios(response.data);

        } catch (error) {

        }
    };


    const addUSer = async (usuario) =>{
        try {
            await axios.post ('http://localhost:8000/users', usuario);
            await getUsers(); //actualiza la lista de usuarios
        } catch (error) {
            
        }
    };

    const logOut = () =>{
        localStorage.removeItem("user");
        window.location.href= "/";
    };


    const deleteUsuario = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/users/${id}`);

            await getUsers();

        } catch (error) {
            
        }
    };
    
    const editUsuario = async (usuario) => {
        try {
            await axios.put(`http://localhost:8000/users/${usuario.id}`, usurario);
            await getUsers();
        
        } catch (error) {
            
        }
    }


useEffect(() => {
   getUsers(); 
}, []);

return (
    <UsersProvider.Provider value={{usuarios, getUsers, addUSer,logOut, deleteUsuario, editUsuario}}>

        {children}

    </UsersProvider.Provider>
  )
};

export default UsersContext