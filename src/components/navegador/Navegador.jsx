import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "./styleNavegador.css"

const Navegador = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Comision 79i</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("Contador")}>Contador</Nav.Link>
              <Nav.Link onClick={() => navigate("Administrador")}>Administrador</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
