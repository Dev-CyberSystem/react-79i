import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
export const UserProvider = createContext()
const UsersContext = ({children}) => {
    const [usuarios,setUsuarios] = useState([])
    const getUsers =async()=>{
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUsers()
    },[])
    return (
    <UserProvider.Provider value={{usuarios,getUsers}}>
      {children}
    </UserProvider.Provider>
  )
}

export default UsersContext
