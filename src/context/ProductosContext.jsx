import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsProvider = createContext();

// eslint-disable-next-line react/prop-types
const ProductosContext = ( {children} ) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    // ------------->  GET  <-------------
    const obtenerDatos = async () => {
        try{
            const response = await axios.get("http://localhost:8005/productos");
            console.log(response,"<-- Respuesta")
            setProductos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // ------------->  POST  <-------------
    const addProducto = async ( producto ) => {
        try{
            const response = await axios.post("http://localhost:8005/productos", producto);
            setProductos([...productos, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    // ------------->  DELETE  <-------------
    const deleteProducto = async (id) => {
        try{
            await axios.delete(`http://localhost:8005/productos/${id}`);
            setProductos(productos.filter( (producto) => producto.id !== id) );
        } catch(error) {
            console.error(error);
        }
    };

    // ------------->  PUT  <-------------
    const updateProducto = async (producto) => {
        try{
            await axios.put(`http://localhost:8005/productos/${producto.id}`, producto);
            await obtenerDatos();
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <ProductsProvider.Provider value={{ productos, addProducto, deleteProducto, updateProducto }}>
        {children}{" "}
    </ProductsProvider.Provider>
  );
};

export default ProductosContext