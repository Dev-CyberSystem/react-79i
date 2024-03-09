/* eslint-disable no-unused-vars */
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userProvider } from '../../context/UsersContext';
import Login from '../login/Login';

import './styleNavegador.css';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const { logOut } = useContext(userProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? 'Bienvenido' + user.nombre : 'No hay usuario'}
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>

              {user?.isAdmin ? (
                <Nav.Link onClick={() => navigate('/admin')}>
                  Administrador
                </Nav.Link>
              ) : null}

              {user ? (
                <Button variant="danger" onClick={() => logOut()}>
                  Cerrar Sesión
                </Button>
              ) : (
                <Button variant="success" onClick={handleShow}>
                  Iniciar Sesión
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
