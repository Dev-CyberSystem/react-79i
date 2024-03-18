import { Button, Container, Form, Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from '../login/Login';
import './styleNavbarComp.css';

const NavbarComp = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) | null;
  console.log(loggedUser.name)

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
                <Nav.Link onClick={() => navigate('/products')}>Productos</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown" hidden>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled hidden>
                  Link
                </Nav.Link>
                <Nav.Link onClick={() => navigate('/s')}>404</Nav.Link>
                <Nav.Link onClick={() => navigate('/admin')}>Admin panel</Nav.Link>
                {loggedUser ?(
                <Nav.Link disabled className='text-success'> asdasdasd</Nav.Link>
                ) :(null)
                }
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
            {loggedUser ?(
            <Button variant="danger" onClick={localStorage.removeItem("loggedUser")+navigate('/')} className='ms-2'>Cerrar sesión</Button>
            ) : (
            <Button variant="success" onClick={handleShow} className='ms-2'>Iniciar sesión</Button>
            )}
            <Button variant="warning" onClick={() => navigate('/register') } className='ms-2'>Registrarse</Button>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicio de sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login handleClose={handleClose}/>
          </Modal.Body>
        </Modal>

        </>
    )
};
export default NavbarComp;