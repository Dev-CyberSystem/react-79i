import { useState } from "react";
import { Form, Button }  from "react-bootstrap";

const FormUsuarios = () => {

    const [usuario, setusuario] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" 
                    value={usuario} 
                    onChange={(e) =>{setusuario (e.target.value)}}
                    name="usuario" 
                    placeholder="usuario" />
                </Form.Group>
                <Button variant="primary" className="mt-3 mb-5" type="submit">Añadir Usuario</Button>
            </Form>
        </>
    )
}

export default FormUsuarios