import { createContext, useState, useEffect } from "react"
import axios from "axios";

export const DataProvider = createContext();

const DataContext = ({children}) => {
    const defaultQty = 10;
    const [prodQty, setProdQty] = useState(defaultQty);
    const [prodArr, setProdArr] = useState([]);
    
    const hookSet = (qty) => {
        if ((prodQty + qty >= 0) && (prodQty + qty <= prodArr.length)) {
            setProdQty(prodQty + qty)
            console.log(`hook actualizado en DataContext.jsx, valor:${prodQty+qty}`)
        } else {null}
    }
    
    const hookReset = () => {
      setProdQty(defaultQty)
      console.log(`hook restablecido en DataContext.jsx, valor:${defaultQty}`)
    }
    
    useEffect(() => {
      const getData = async () => {
        try {
          const serverData = await axios.get("https://jsonplaceholder.typicode.com/users");
          setProdArr(serverData.data)
        }
        catch(ev) {
          console.warn(`==> ${ev}`)
        }
      }
      getData();
    }, [prodQty]);

  return (
    <DataProvider.Provider value={{prodQty, prodArr, hookSet, hookReset}}>
        {children}
    </DataProvider.Provider>
  )
};
export default DataContext;