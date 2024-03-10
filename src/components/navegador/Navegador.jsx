import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersProvider } from '../../context/UsersContext';
import { Modal } from 'react-bootstrap';

export function Navegador() {

  const [show, setShow] = useState(false);

  const { logOut } = useContext(UsersProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary p-2 m-1">
      <Container fluid>
        <Navbar.Brand href="#"><Image src="https://web.rollingcodeschool.com/wp-content/uploads/2023/10/RollingCode-Logo-3.svg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <NavLink className="nav-link" to="/link">Contenido</NavLink>
            <Nav.Link href="#" disabled>
              Coming Soon!
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Nav className="me-auto">
            {user ? "Bienvenido" + user.nombre : "NO ESTAS LOGEADO"}

              {user?.isAdmin ? (
                <Nav.Link onClick={() => navigate("/admin")}>
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
          </Form>
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
};