import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersProvider = createContext();

const UsersContext = ({children}) => {
    const [usersArr, setUsersArr] = useState([]);

    const getUsers = async () => {
        try {
            const serverReply = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsersArr(serverReply.data)
        }
        catch(ev) {
            console.warn(`Users server reply server fail==> ${ev}`)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);


  return (
    <UsersProvider.Provider value={{ usersArr }}>
        {children}
    </UsersProvider.Provider>
  )
}
export default UsersContext;