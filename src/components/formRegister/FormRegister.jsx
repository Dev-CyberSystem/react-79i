import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FormRegister = ( {editarUsuario, handleClose }) => {
    const { addUsuario, updateUsuario } = useContext(UsuariosProvider);
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        id: editarUsuario ? editarUsuario.id : uuidv4(),
        nombre: editarUsuario ? editarUsuario.nombre : "",
        email: editarUsuario ? editarUsuario.email : "",
        password: editarUsuario ? editarUsuario.password : "",
        isAdmin: editarUsuario ? editarUsuario.isAdmin : false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if(type === "checkbox"){
            setUsuario({
                ...usuario,
                [name] : checked
            });
        }else{
            setUsuario({
                ...usuario,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(editarUsuario){
            updateUsuario(usuario);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario Editado!",
                showConfirmButtom: false,
                timer: 1500,
            });

            handleClose();
        }else{
            addUsuario(usuario);
    
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario registrado!",
                showConfirmButtom: false,
                timer: 1500,
            });
    
            navigate("/");
        }

        setUsuario({
            id: uuidv4(),
            nombre: "",
            email: "",
            password: "",
            isAdmin: false,
        });
    };


  return (
    <>
    <Container className = {editarUsuario ? "mt-0" : "mt-5"} >
        <Row >
            <Col>
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            name="nombre"
                            value={usuario.nombre}
                            placeholder="Nombre de suaurio"
                            onChange={ handleChange }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={usuario.email}
                            placeholder="Ingrese su Email"
                            onChange={ handleChange }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            value={usuario.password}
                            placeholder="Ingrese su Contraseña"
                            onChange={ handleChange }
                        />
                    </Form.Group>

                    {editarUsuario ? (
                        <Form.Group className="mb-3">
                            <Form.Label >Admin</Form.Label>
                            <Form.Check 
                                type="checkbox"
                                name="isAdmin"
                                checked={usuario.isAdmin}
                                onChange={ handleChange }
                            />
                        </Form.Group>
                    ) : null}

                    {editarUsuario ? (
                        <Button type="submit" variant="warning">
                            Editar
                        </Button>    
                    ) : (
                        <Button type="submit" variant="success">
                            Registrarse
                        </Button>
                    )}
                </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

FormRegister.propTypes = {
    editarUsuario: PropTypes.object,
    handleClose: PropTypes.func
};

export default FormRegister