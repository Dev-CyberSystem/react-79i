import { useContext, useState } from "react";
import { Form, Button }  from "react-bootstrap";
import { productosProvider } from "../../context/ProductosContext";

const FormProductos = () => {

    const { addProductos } = useContext(productosProvider)

    const [producto, setProducto] = useState({
        id:"",
        nombre:"",
        precio:""
    })

    const handleChange = (e) => {
       setProducto({
        ...producto,
        [e.target.name]: e.target.value,
       });
    }

    console.log(producto, "aquiiiiiiiiiiiiiiiiiii")

    const handleSubmit = (e) => {
        e.preventDefault();
        addProductos(producto);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" 
                    value={producto.nombre} 
                    onChange={handleChange}
                    name="nombre" 
                    placeholder="nombre del producto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type='number' 
                    value={producto.precio} 
                    onChange={handleChange}
                    name="precio" 
                    placeholder="precio del producto" />
                </Form.Group>
                <Button variant="primary" className="mt-3 mb-5" type="submit">Añadir producto</Button>
            </Form>
        </>
    )
}

export default FormProductos