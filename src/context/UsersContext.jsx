import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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

    const suprUser = async (userObj) => {
        await Swal.fire({
            title: `Confirma eliminación de usuario "${userObj.username}"?`,
            text: "Esta acción no podrá revertirse.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://localhost:8000/users/${userObj.id}`);
                    setUsersArr(usersArr.filter((user) => user.id !== userObj.id))
                } catch (ev) {
                    console.error(ev)
                }
              Swal.fire({
                title: `Usuario "${userObj.username}" eliminado`,
                icon: "success",
                showConfirmButton: false,
                timer: 2500
              });
            }
          });
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