import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersProvider = createContext();

const UsersContext = ({children}) => {
    const [usersArr, setUsersArr] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const serverRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsersArr(serverRequest.data)
                console.log(serverRequest.data)
            }
            catch(ev) {
                console.warn(`Error==>${ev}`)
            }
        }
        getUsers();
    }, []);


  return (
    <UsersProvider.Provider value={{ usersArr }}>
        {children}
    </UsersProvider.Provider>
  )
}
export default UsersContext;