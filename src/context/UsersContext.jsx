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
    }


useEffect(() => {
   getUsers(); 
}, []);

return (
    <UsersProvider.Provider value={{usuarios, getUsers, addUSer,logOut}}>

        {children}

    </UsersProvider.Provider>
  )
};

export default UsersContext