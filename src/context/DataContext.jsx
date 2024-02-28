import { createContext, useState, useEffect } from "react"
import axios from "axios";

export const DataProvider = createContext();

const DataContext = ({children}) => {
    const defaultQty = 10;
    const [prodQty, setProdQty] = useState(defaultQty);
    const [prodArr, setProdArr] = useState([]);
    
    // const hookSet = (qty) => {
    //     if ((prodQty + qty >= 0) && (prodQty + qty <= prodArr.length)) {
    //         setProdQty(prodQty + qty)
    //         console.log(`hook actualizado en DataContext.jsx, valor:${prodQty+qty}`)
    //     } else {null}
    // }
    
    // const hookReset = () => {
    //   setProdQty(defaultQty)
    //   console.log(`hook restablecido en DataContext.jsx, valor:${defaultQty}`)
    // }

    const hookSet = (signValue) => {
        const stringed = signValue.toString();
        const sign = stringed[0];
        const qty = parseInt(stringed.slice(1))
        if (stringed.match(/^[-+=][0-9]{1,3}$/g)) {
            switch (sign){
                case "=":
                    (qty <= prodArr.length) ?console.log("replace counter value")+setProdQty(qty) :null
                    break;
                case "-":
                    (prodQty - qty >= 0) ?console.log("decrease counter")+setProdQty(prodQty - qty) :null
                    break;
                case "+":
                    (prodQty + qty <= prodArr.length) ?console.log("increase counter")+setProdQty(prodQty + qty) :null
                    break;
            }
        } else {
            return console.warn("Sintaxis erronea, ingrese un operador (-,+,=) seguido de hasta 3 digitos")
        }
    };
    
    
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
    <DataProvider.Provider value={{prodQty, prodArr, hookSet}}>
        {children}
    </DataProvider.Provider>
  )
};
export default DataContext;