import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./styleNavegador.css"

const Navegador = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
              <img
                src="..\src\assets\logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
