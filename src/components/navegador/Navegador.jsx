//import React from 'react' // Desde la version 18 ya no es necesario
import { Container, Nav, Navbar, NavDropdown, Button, Modal, } from 'react-bootstrap';
import "./styleNavegador.css"
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';
import { useContext, useState } from 'react';
import { UsuariosProvider } from '../../context/UsuariosContext';

const Navegador = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = JSON.parse( localStorage.getItem("user") );
    const { logOut } = useContext( UsuariosProvider );
    
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top ">
            <Container fluid>
                <Navbar.Brand onClick={()=> navigate("/")}>
                <img src="../../../src/assets/logo.png" alt="Logo de Rolling Store" className="img-fluid w-25" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0"> 

                        {user ? (`Bienvenido, ${user.nombre}`) : ("No hay usuario")}

                        <Nav.Link onClick={()=> navigate("/")} active>Home</Nav.Link>

                        {user?.isAdmin ? (
                            <Nav.Link onClick={()=>navigate("/admin")}>Administrador</Nav.Link>
                        ) : null}

                        <Nav.Link href='https://rollingcode.co/#RollingCodeLabs' target='blank'>Labs</Nav.Link>
                        <Nav.Link href='https://rollingcode.co/#RollingCodeStudio' target='blank'>Studio</Nav.Link>
                        <Nav.Link href='https://rollingcode.co/#RollingCodeSchool' target='blank'>School</Nav.Link>
                        <Nav.Link href='/*' target='blank'>Sobre nosotros</Nav.Link>
                        
                    </Nav>

                    <Nav className="me-5 mb-2 mb-lg-0">
                        {user ? (
                            <Button variant='danger' onClick={ () => logOut() }>Cerrar sesión</Button>
                            ) : (
                            <Button variant='success' onClick={ handleShow }>
                                Iniciar sesión <i className="bi bi-box-arrow-in-right"></i>
                            </Button>
                        )}                        

                        {/*<Nav.Link href='/login'>Ingresar <i className="bi bi-box-arrow-in-right"></i></Nav.Link>
                         <NavDropdown title="Ingresar" id="basic-nav-dropdown" className='fs-5 '>
                            
                            <NavDropdown.Item href="#action/3.2" className='w-100 d-flex'>
                                Opciones <i className="bi bi-gear ms-auto"></i>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className='w-100 d-flex'>Panel de Administración <i className="bi bi-gear ms-2"></i>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4" className='w-100 d-flex'>
                                Cerrar sesión <i className="bi bi-box-arrow-in-left ms-auto"></i>
                            </NavDropdown.Item> 

                        </NavDropdown>*/}
                    </Nav>

                </Navbar.Collapse>


            </Container>
        </Navbar>
        
        <Button className='btnPrueba' variant="warning">Boton RB</Button>

        <button className='btn btn-danger '>Boton de bootstrap</button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Inicio de sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login handleClose={ handleClose }/>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default Navegador