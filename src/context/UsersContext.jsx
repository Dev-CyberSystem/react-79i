import { createContext, useState } from "react"


export const UsersProvider = createContext()
const 


const UsersContext = ({children}) => {
    const [usuarios, setUsuarios] = useState([])





  return (
    <UsersProvider.Provider value={{usuarios}}>
        {children}

    </UsersProvider.Provider>
  )
}

export default UsersContext