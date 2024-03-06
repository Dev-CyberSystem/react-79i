/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { userProvider } from '../../context/UsersContext';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const FormUsers = ({ editarProductos, handleClose }) => {
  const { addUser, updateUser } = useContext(userProvider);

  // console.log(editarProductos, "editar Producto");

  const [user, setProducto] = useState({
    id: editarProductos ? editarProductos.id : uuidv4(),
    name: editarProductos ? editarProductos.name : '',
    email: editarProductos ? editarProductos.email : '',
    company: editarProductos ? editarProductos.company : '',
  });

  const handleChange = (e) => {
    setProducto({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editarProductos) {
      updateUser(user);
      handleClose();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto editado',
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        id: uuidv4(),
        name: '',
        email: '',
        company: '',
      });
    } else {
      addUser(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        id: uuidv4(),
        name: '',
        email: '',
        company: '',
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            name="name"
            onChange={handleChange}
            placeholder="Email del Usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            placeholder="Email del Usuario"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Compañía</Form.Label>
          <Form.Control
            type="text"
            value={user.company}
            name="company"
            onChange={handleChange}
            placeholder="Compañía del Usuario"
          />
        </Form.Group>

        {editarProductos ? (
          <Button type="submit" variant="warning">
            Editar Usuario
          </Button>
        ) : (
          <Button type="submit" variant="success">
            Agregar Usuario
          </Button>
        )}
      </Form>
    </>
  );
};

FormUsers.propTypes = {
  editarUsuario: PropTypes.object,
};

export default FormUsers;
