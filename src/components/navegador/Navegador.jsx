import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./styleNavegador.css"

const Navegador = () => {

 const Navigate = useNavigate()
  return (
    <Navbar expand="lg" className="color-Navegador">
    <Container fluid>
      <Navbar.Brand onClick={() => Navigate("/")} className='color-letras'>Adidas</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link onClick={() => Navigate("/")} className='color-letras'>Home</Nav.Link>
          <Nav.Link onClick={() => Navigate("/productos")} className='color-letras'>productos</Nav.Link>
          <Nav.Link onClick={() => Navigate("/nosotros")} className='color-letras'>Nosotros</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className='botom' >Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navegador 