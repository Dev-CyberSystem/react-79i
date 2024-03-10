import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductosContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { PropTypes } from "prop-types";

const FormProductos = ({ editarProductos, handleClose }) => { /*estoy recibiendo props (editarProductos) de   como prop*/
  const { addProducto, updateProductos } =    useContext(ProductsProvider); /*desestructuracion de add producto*/

  const [producto, setProducto] = useState({
    id: editarProductos ? editarProductos.id : uuidv4(),
    nombre: editarProductos ? editarProductos.nombre : "",
    precio: editarProductos ? editarProductos.precio : "",
    imagen: editarProductos ? editarProductos.imagen : "",
  });

  const handleChange = (e) => {
    /* el handleChange ACTUALIZA el estado de producto */
    setProducto({
      ...producto /*Recupera los datos del estado inicial de productos */,
      [e.target.name]:
        e.target.value /*evento y despues toma el elemento name y despues agrega el valor */,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editarProductos){
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
      console.log(producto, "formulario" );
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
  };
    }
   

  return (
    /* siempre una funciion se va a llamar handle...*/
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={producto.nombre}
            onChange={handleChange} /*Onchange hace el envio de los datos y empezar a guardarlo*/
            name="nombre"
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            onChange={handleChange}
            name="precio"
            placeholder="Precio del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            value={producto.imagen}
            onChange={handleChange}
            name="imagen"
            placeholder="Imagen del producto"
          />
        </Form.Group>
        {editarProductos ? (
          <Button type="submit" variant="warning"> Editar Producto </Button>
        ) : (
          <Button type="submit" variant="success"> Agregar Producto </Button>
        )}
        
      </Form>
    </>
  );
};

FormProductos.propTypes = {
  editarProductos: PropTypes.object,
};

export default FormProductos;
