import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import './styleNavegador.css';

function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-navbar">
      <Container fluid className="text-white">
        <Navbar.Brand onClick={() => navigate('/')} className="text-light">
          Nav React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => navigate('/Productos')}
              className="text-light"
            >
              Productos
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/Usuarios')}
              className="text-light"
            >
              Usuarios
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/NuevaPagina')}
              className="text-light"
            >
              Nueva Pagina
            </Nav.Link>
            <NavDropdown
              title="Options"
              id="navbarScrollingDropdown"
              className="dropdown-text"
            >
              <NavDropdown.Item>Error404</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Nueva Pagina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Split option</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Start your search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn btn-dark border-0 fw-bold">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
