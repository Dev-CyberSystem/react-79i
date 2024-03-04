import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersProvider = createContext();

const UsersContext = ({children}) => {
    const [usersArr, setUsersArr] = useState([]);

    const getUsers = async () => {
        try {
            const serverReply = await axios.get("http://localhost:8000/users")
            setUsersArr(serverReply.data)
            console.info(serverReply)
        }
        catch(ev) {
            console.error(`Server reply fail==> ${ev}`)
        }
    };

    const addUser = async (newUserObj) => {
        try {
            const dispatchNewUser = await axios.post("http://localhost:8000/users", newUserObj);
            console.log(dispatchNewUser.data, "Usuario agregado")
            setUsersArr([...usersArr, dispatchNewUser.data])
        } catch(ev) {
            console.error(`Server dispatch fail==> ${ev}`)
        }
    }

    const suprUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/users/${id}`);
            setUsersArr(usersArr.filter((user) => user.id !== id))
        } catch (ev) {
            console.error(ev)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);


  return (
    <UsersProvider.Provider value={{ usersArr, addUser, suprUser }}>
        {children}
    </UsersProvider.Provider>
  )
}
export default UsersContext;