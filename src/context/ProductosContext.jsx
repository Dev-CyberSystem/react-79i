import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsProvider = createContext();

// eslint-disable-next-line react/prop-types
const ProductosContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  // Verbos http para consumir la API
  // Get para obtener los datos
  // Post para enviar los datos
  // Put para actualizar los datos
  // Delete para eliminar los datos

  //CRUD
  //Create
  //Read
  //Update
  //Delete

  //ABM
  //Alta
  //Baja
  //Modificacion

  // Funcion para obtener los datos de la API GET
  const obtenerDatos = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Post para alimentar nuestra base de datos.

  const addProducto = async (producto) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/products",
        producto
      );

      setProductos([...productos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete para eliminar un producto de la base de datos.

  const deleteProductos = async (id) => {
    try {
      await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);

      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Put para actualizar un producto de la base de datos.

  const updateProductos = async (producto) => {
    try {
      await axios.put(
        `https://api.escuelajs.co/api/v1/products/${producto.id}`,
        producto
      );

      await obtenerDatos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);


  return (
    <ProductsProvider.Provider
      value={{ productos, addProducto, deleteProductos, updateProductos }}
    >
      {children}
    </ProductsProvider.Provider>
  );
};

export default ProductosContext;