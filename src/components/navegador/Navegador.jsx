import { Container, Nav, Navbar, NavDropdown, Button, Form, Col, Image} from "react-bootstrap";
import logo from "../../assets/SINERGIA.png"
import "./styleNavegador.css"


export function Navegador(){
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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="letraNavbar">Inicio</Nav.Link>
            <Nav.Link className="letraNavbar">Nosotros</Nav.Link>
            <NavDropdown className="letraNavbar" title="Ascesoria Laboral" id="navbarScrollingDropdown">
              <NavDropdown.Item>Empresas</NavDropdown.Item>
              <NavDropdown.Item>
                Personal
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Cargá tu curriculum
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>
  );
};

