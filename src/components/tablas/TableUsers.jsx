/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { userProvider } from '../../context/UsersContext';
import { Table, Button, Modal } from 'react-bootstrap';
import FormUsers from '../formUsers/FormContext';

const TableUsers = () => {
  const { users, deleteUser } = useContext(userProvider);
  const [editarUsuario, setEditUser] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (producto) => {
    setEditUser(producto);
    setShow(true);
  };

  return (
    <>
      {users.length === 0 ? (
        'No hay productos'
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Compañías</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario) => (
                <>
                  <tr>
                    <td>{usuario.id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.company}</td>
                    <td>
                      <Button
                        variant="secondary"
                        onClick={() => handleEdit(usuario)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(usuario.id)}
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
              <Modal.Title>Formulario de edicion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {' '}
              <FormUsers
                editarUsuario={editarUsuario}
                handleClose={handleClose}
              />{' '}
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TableUsers;
