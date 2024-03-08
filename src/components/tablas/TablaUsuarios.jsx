import { Button, Modal, Table } from "react-bootstrap"
import { useContext, useState } from "react";
import { UsuariosProvider } from "../../context/UsuariosContext";
import FormUsuarios from "../formUsuarios/FormUsuarios";

const TablaUsuarios = () => {
    const { usuarios, deleteUsuario } = useContext(UsuariosProvider);
    const [ editarUsuario, setEditarUsuario ] = useState(null);

    const handleEdit = ( usuario ) => {
        setEditarUsuario(usuario);
        setShow(true);
    };

    // ------------->  MODAL  <-------------
    const [ show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false);
    };
    // ----------------- >< -----------------

  return (
    <>
    {usuarios.length === 0 ? (
        <h1>No hay usuarios disponibles</h1>
    ) : (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map( (usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.password}</td>
                        <td>
                            <Button variant="warning" onClick={ () => handleEdit(usuario) }>Editar</Button>
                            <Button variant="danger" onClick={ () => deleteUsuario(usuario.id) }>Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Modal show={ show } onHide={ handleClose } >
            <Modal.Header closeButton>
                <Modal.Title>Formulario de Edición</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormUsuarios editarUsuario={editarUsuario} handleClose={handleClose}/>
            </Modal.Body>
        </Modal>
        </>
    )}

    </>
  )
}

export default TablaUsuarios