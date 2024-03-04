import { useContext } from "react";
import { usuariosProvider } from '../../context/UsuariosContext'
import { Table, Button } from 'react-bootstrap';

const TablaUsuarios = () => {

    const { usuarios } = useContext(usuariosProvider);

    return (
        <>
            {usuarios.length === 0 ? (
                <h3 className="text-center mt-3 mb-3">No hay Usuarios</h3>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>nombre</th>
                            <th>email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <Button variant="warning" className="me-1 ms-1">editar</Button>
                                    <Button variant="danger" className="me-1 ms-1">eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default TablaUsuarios;