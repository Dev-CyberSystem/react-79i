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
            navbarScroll
          >
            <Nav className="me-auto">
            {user ? "Bienvenido" + user.nombre : "NO ESTAS LOGEADO"}
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

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
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/link">Link</NavLink>
            <NavDropdown title="Admin" id="navbarScrollingDropdown">
              <NavDropdown.Item>
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                DropDown2              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                DropDown3              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Coming Soon!
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
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