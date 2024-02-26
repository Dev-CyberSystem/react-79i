import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductsProvider = createContext()


// eslint-disable-next-line react/prop-types
const ProductosContext = ({children}) => {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        const obtenerDatos = async () => {
          try {
            const response = await axios.get("http://localhost:8000/productos");
            setProductos(response.data);
          }
          catch (error) {
            console.error(error);
          }
        }
        obtenerDatos();
      }, []);

      console.log(productos, "productos desde el context");



  return (
    <ProductsProvider.Provider value={{ productos }}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext