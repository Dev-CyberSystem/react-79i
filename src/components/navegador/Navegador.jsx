import { useContext, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  Col,
  Image,
  Modal,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";
import logo from "../../assets/img/SINERGIA.png";
import "./styleNavegador.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";

export function Navegador() {
  const [show, setShow] = useState(false);

  const { logOut } = useContext(UsersProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="navBar">
        <Container fluid>
          <Navbar.Brand href="#">
            <Col xs={6} md={4}>
              <Image className="logoNavbar" src={logo} roundedCircle />
            </Col>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
            >
              {user? "Bienvenido" + user.nombre : "No hay usuario"}
              <Nav.Link className="nav-link letraNavbar" onClick={() => navigate("/")}>Inicio</Nav.Link>

              {user?.isAdmin  ? (

                <Nav.Link className="nav-link letraNavbar" onClick={() => navigate("/admin")}>Administrador</Nav.Link>
              ) : null}

              <Nav.Link className="nav-link letraNavbar" onClick={() => navigate("/login")}>login</Nav.Link>
              
              <NavLink className="nav-link letraNavbar" to="/nosotros">Nosotros</NavLink>
              <NavDropdown className="letraNavbar" title="Asesoria Laboral" id="navbarScrollingDropdown"              >
                <NavDropdown.Item to="/asesoriasEmpresas">Empresas{" "}</NavDropdown.Item>
                <NavDropdown.Item to="/asesoriasPersonal">{" "}Personal{" "}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="/asesoriasCurriculum">{" "}Cargá tu curriculum{" "}</NavDropdown.Item>
              </NavDropdown>
              {user ? (
                <Button variant="danger" onClick={() => logOut()}>
                  Cerrar Sesion
                </Button>
              ) : (
                <Button variant="success" onClick={handleShow}>
                  Iniciar Sesion
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader>
          <Modal.Title>Inicio de Sesion</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <Login handleClose={handleClose} />
        </ModalBody>
      </Modal>
    </>
  );
}
