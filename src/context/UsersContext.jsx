import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
export const UserProvider = createContext()
const UsersContext = ({children}) => {
    const [usuarios,setUsuarios] = useState([])
    
    //obteniendo los usuarios
    const getUsers =async()=>{
        try {
          const response = await axios.get("http://localhost:5573/users")
          setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }
   
  
    //agregando usuarios
    const addUsers = async(usuario)=>{
      try {
        const response = await axios.post(
        "http://localhost:5573/users",
        usuario
      )
      setUsuarios([...usuarios,response.data])
      } catch (error) {
        return error
      }
    }
    //eliminando un usuario
    const deleteUser = async(id)=>{
      try {
        await axios.delete(`http://localhost:5573/users/${id}`)
        setUsuarios(usuarios.filter(u=>u.id!==id))
      } catch (error) {
        console.log(error)
      }
    }
    //Para actualizar un usuario
    const updateUser = async(usuario)=>{
      try {
        await axios.put(`http://localhost:5573/users/${usuario.id}`,usuario)
        await getUsers()
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getUsers()
    },[])
    return (
    <UserProvider.Provider value={{usuarios,getUsers,addUsers,deleteUser,updateUser}}>
      {children}
    </UserProvider.Provider>
  )
};

export default UsersContext
