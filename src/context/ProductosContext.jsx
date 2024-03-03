import { createContext } from "react"

export const productosContexto = createContext()

const ProductosContext = ({children}) => {
    return (
        <productosContexto.Provider>
            {children}
        </productosContexto.Provider>
    )
}

export default ProductosContext