import React from 'react'
import TablaUsuarios from "../../components/tablas/TablaUsuarios"
import FormUsers from '../../components/formUsuarios/FormUsers'
import { Container,Row,Col} from 'react-bootstrap'

const AdminUsers = () => {

  return (
    <Container className='contenedor-usuarios'>
      <h1>Admin de usuarios</h1>
      <Row>
        <Col><TablaUsuarios/></Col>
        <Col><FormUsers/></Col>
      </Row>
    </Container>
  )
}

export default AdminUsers;
