import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

import './styleNavegador.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-navbar">
      <Container fluid className="text-white">
        <Navbar.Brand href="#" className="text-light">
          Nav React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light">
              Market
            </Nav.Link>
            <NavDropdown
              title="Options"
              id="navbarScrollingDropdown"
              className="dropdown-text"
            >
              <NavDropdown.Item href="#action3">First Option</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Second option</NavDropdown.Item>
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
