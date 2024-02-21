import { Container, Nav, Navbar, NavDropdown, Button, Form, Col, Image} from "react-bootstrap";
import logo from "../../assets/img/SINERGIA.png"
import "./styleNavegador.css"
import { NavLink } from "react-router-dom";


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
            <NavLink className="nav-link letraNavbar" to="/" >Inicio</NavLink>
            <NavLink className="nav-link letraNavbar" to="/nosotros" >Nosotros</NavLink>
            <NavDropdown className="letraNavbar" title="Asesoria Laboral" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <NavLink to="/asesoriaEmpresas" className="nav-link">
                Empresas
                </NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="/asesoriaPersonal" className="nav-link">
                Personal
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/ascesoriaCurriculum" className="nav-link">
                Cargá tu curriculum
                </NavLink>
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

