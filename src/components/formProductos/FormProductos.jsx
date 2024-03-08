import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ProductsProvider } from "../../context/ProductosContext";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const FormProductos = ( { editarProducto, handleClose } ) => {
    const { addProducto, updateProducto } = useContext(ProductsProvider);

    const [ producto, setProducto] = useState({
        id: editarProducto ? editarProducto.id : uuidv4(),
        nombre: editarProducto ? editarProducto.nombre : "",
        precio: editarProducto ? editarProducto.precio : "",
        imagen: editarProducto ? editarProducto.imagen : ""
    });

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(editarProducto){
            updateProducto(producto);

            handleClose();

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto Editado!",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            addProducto(producto);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto Agregado!",
                showConfirmButton: false,
                timer: 1500
            });
        }

        setProducto({
            id: uuidv4(),
            nombre: "",
            precio: "",
            imagen: ""
        });
    };

    return (
        <>
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text"
                    value={producto.nombre}
                    name="nombre"
                    placeholder="Nombre del producto"
                    onChange={ handleChange }
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                    type="number"
                    value={producto.precio}
                    name="precio"
                    placeholder="Precio del producto"
                    onChange={ handleChange }
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    type="text"
                    value={producto.imagen}
                    name="imagen"
                    placeholder="URL de la imagen del producto"
                    onChange={ handleChange }
                />
            </Form.Group>
            {editarProducto ? (
                <Button type="submit" variant="warning">Editar Producto</Button>    
            ) : (
                <Button type="submit" variant="success">Agregar Producto</Button>
            )}
        </Form>
        </>
    )
}

FormProductos.propTypes = {
    editarProducto: PropTypes.object,
    handleClose: PropTypes.func
};

export default FormProductos