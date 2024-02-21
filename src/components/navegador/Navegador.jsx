import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export function Navegador() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary p-2 m-1">
      <Container fluid>
        <Navbar.Brand href="#"><Image src="https://web.rollingcodeschool.com/wp-content/uploads/2023/10/RollingCode-Logo-3.svg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/link">Link</NavLink>
            <NavDropdown title="DropDown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">DropDown1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                DropDown2              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                DropDown3              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Coming Soon!
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};