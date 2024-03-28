import { useState, useContext } from "react";
import { Container, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";
import "./styleNavegador.css";
import Login from "../login/Login";

const Navegador = () => {
  const [show, setShow] = useState(false);

  const { logOut } = useContext(UsersProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            Comision 79i
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? "Bienvenido" + user.nombre : "No hay usuario"}
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

              {user?.admin ? (
                <Nav.Link onClick={() => navigate("/api/admin")}>
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
};

export default Navegador;
