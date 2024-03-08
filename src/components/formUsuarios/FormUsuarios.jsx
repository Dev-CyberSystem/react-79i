import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Swal from "sweetalert2";

const FormUsuarios = ( { editarUsuario, handleClose }) => {
    const { addUsuario, updateUsuario } = useContext(UsuariosProvider);

    const [ usuario, setUsuario] = useState({
        id: editarUsuario ? editarUsuario.id : uuidv4(),
        name: editarUsuario ? editarUsuario.name : "",
        email: editarUsuario ? editarUsuario.email : "",
        password: editarUsuario ? editarUsuario.password : ""
    });

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(editarUsuario){
            updateUsuario(usuario);

            handleClose();

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario Editado!",
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            addUsuario( usuario );

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario Agregado!",
                showConfirmButton: false,
                timer: 1500
            });
        }

        setUsuario({
            id: uuidv4(),
            name: "",
            email: "",
            password: ""
        });
    };

  return (
    <>
    <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            type="text"
            value={usuario.name}
            name="name"
            placeholder="Nombre de usuario"
            onChange={ handleChange }
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email"
            value={usuario.email}
            name="email"
            placeholder="Email del usuario"
            onChange={ handleChange }
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="text"
            value={usuario.password}
            name="password"
            placeholder="Ingrese la contraseña"
            onChange={ handleChange }
            disabled={ editarUsuario }
            />
        </Form.Group>

        {editarUsuario ? (
            <Button type="submit" variant="warning">Editar Usuario</Button>
        ) : (
            <Button type="submit" variant="success">Agregar Usuario</Button>
        )}
    </Form>
    </>
  )
}

FormUsuarios.propTypes = {
    editarUsuario: PropTypes.object,
    handleClose: PropTypes.func
};

export default FormUsuarios