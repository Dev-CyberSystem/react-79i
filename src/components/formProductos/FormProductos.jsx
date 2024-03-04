import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductsProvider } from "../../context/ProductosContext";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FormProductos = ({ editarProductos, handleClose }) => {
  const { addProducto, updateProductos } = useContext(ProductsProvider);
  console.log(addProducto);

  console.log(editarProductos, "editar Producto");

  const [producto, setProducto] = useState({
    id: editarProductos ? editarProductos.id : uuidv4(),
    nombre: editarProductos ? editarProductos.nombre : "",
    precio: editarProductos ? editarProductos.precio : "",
    imagen: editarProductos ? editarProductos.imagen : "",
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editarProductos) {
      updateProductos(producto);
      handleClose();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto editado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        id: uuidv4(),
        nombre: "",
        precio: "",
        imagen: "",
      });
    } else {
      addProducto(producto);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        id: uuidv4(),
        nombre: "",
        precio: "",
        imagen: "",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={producto.nombre}
            onChange={handleChange}
            name="nombre"
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            name="precio"
            onChange={handleChange}
            placeholder="Precio del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            value={producto.imagen}
            name="imagen"
            onChange={handleChange}
            placeholder="Imagen del producto"
          />
        </Form.Group>

        {editarProductos ? (
          <Button type="submit" variant="warning">
            Editar Producto
          </Button>
        ) : (
          <Button type="submit" variant="success">
            Agregar Producto
          </Button>
        )}
      </Form>
    </>
  );
};

FormProductos.propTypes = {
  editarProductos: PropTypes.object,
};

export default FormProductos;
