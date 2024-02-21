import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./styleNavegador.css"
import { Link } from "react-router-dom";
const Navegador = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              
              <Link to={"/"}>Home</Link>
              <Link to={"/contador"}>Contador</Link>
              <Link to={"/about"}>About</Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

      
    </>
  );
};

export default Navegador;
