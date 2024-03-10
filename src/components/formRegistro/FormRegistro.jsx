/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { userProvider } from '../../context/UsersContext';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function FormRegistro({ editUsers, handleClose }) {
  const { addUser, editUser } = useContext(userProvider);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: editUsers ? editUsers.id : uuidv4(),
    nombre: editUsers ? editUsers.nombre : '',
    email: editUsers ? editUsers.email : '',
    password: editUsers ? editUsers.password : '',
    isAdmin: editUsers ? editUsers.isAdmin : false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      return setUser({
        ...user,
        [name]: checked,
      });
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      editUser(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario editado',
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
    } else {
      addUser(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario registrado',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
      setUser({
        id: uuidv4(),
        nombre: '',
        email: '',
        password: '',
        isAdmin: false,
      });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} sm={12} lg={4} xl={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={user.nombre}
                onChange={handleChange}
                name="nombre"
                placeholder="Nombre del usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={user.email}
                name="email"
                onChange={handleChange}
                placeholder="Email del usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={user.password}
                name="password"
                onChange={handleChange}
                placeholder="Contraseña del usuario"
              />
            </Form.Group>
            {editUser ? (
              <Form.Group className="mb-3">
                <Form.Label>Admin</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Admin"
                  checked={user.isAdmin}
                  onChange={handleChange}
                  name="isAdmin"
                />
              </Form.Group>
            ) : null}

            {editUser ? (
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
  );
}

FormRegistro.propTypes = {
  editUsers: PropTypes.object,
  handleClose: PropTypes.func,
};

export default FormRegistro;
