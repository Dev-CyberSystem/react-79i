import { Container, Nav, Navbar, NavDropdown, Button, Form, Col, Image} from "react-bootstrap";
import logo from "../../assets/img/SINERGIA.png"
import "./styleNavegador.css"
import { NavLink, useNavigate} from "react-router-dom";


export function Navegador(){
  const navigate = useNavigate()
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
            <Nav.Link className="nav-link letraNavbar" onClick={ ()=> navigate("/") } >Inicio</Nav.Link>
            <Nav.Link className="nav-link letraNavbar" onClick={ ()=> navigate("/admin") } >Administrador</Nav.Link>
            
            <NavLink className="nav-link letraNavbar" to="/nosotros" >Nosotros</NavLink>
            <NavDropdown className="letraNavbar" title="Asesoria Laboral" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/asesoriasEmpresas" >Empresas </NavDropdown.Item>
              <NavDropdown.Item to="/asesoriasPersonal"> Personal </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/asesoriasCurriculum"> Cargá tu curriculum </NavDropdown.Item>
              
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

