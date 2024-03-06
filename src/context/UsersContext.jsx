import { createContext, useState } from "react"
import axios from "axios";


export const UsersProvider = createContext();



const UsersContext = ({children}) => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsers = async () =>{
        try{    
            const response = await axios.get ("http://localhost:8000/users");

        } catch (error) {

        }
    };

useEffect(() => {
   getUsers(); 
}, []);

return (
    <UsersProvider.Provider value={{usuarios, getUsers}}>

        {children}

    </UsersProvider.Provider>
  )
};

export default UsersContext