import { useContext, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { Table, Button} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import FormRegistro from "../registro/FormRegistro";

const TablaProductos = () => {
  const { usuarios, deleteUsuario } = useContext(UsersProvider);
  const [editarUsuarios, setEditarUsuarios] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (usuario) => {
    setEditarUsuarios(usuario);
    setShow(true);
  };

  return (
    <>
      {usuarios.length === 0 ? (
        "No hay Usuarios"
      ) : (
        <>
          <Table className="mt-4 p-1" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <>
                  <tr>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.isAdmin ? "Si" : "No"}</td>
                    <td>
                      <Button className="m-1 p-1"
                        variant="warning"
                        onClick={() => handleEdit(usuario)}
                      >
                        Editar
                      </Button>
                      <Button className="m-1 p-1"
                        variant="danger"
                        onClick={() => deleteUsuario(usuario.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edicion de Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <FormRegistro
                editarUsuarios={editarUsuarios}
                handleClose={handleClose}
              />{" "}
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TablaProductos;