import { useState } from "react";
import { Form, Button }  from "react-bootstrap";

const FormProductos = () => {

    const [nombre, setNombre] = useState()
    const [precio, setPrecio] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" 
                    value={nombre} 
                    onChange={(e) =>{setNombre (e.target.value)}}
                    name="nombre" 
                    placeholder="nombre del producto" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type='number' 
                    value={precio} 
                    onChange={(e) =>{setPrecio (e.target.value)}}
                    name="precio" 
                    placeholder="precio del producto" />
                </Form.Group>
                <Button variant="primary" className="mt-3 mb-5" type="submit">Añadir producto</Button>
            </Form>
        </>
    )
}

export default FormProductos