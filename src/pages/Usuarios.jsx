/* eslint-disable no-unused-vars */
import { Col, Row, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { userProvider } from '../context/UsersContext';
import FormUsers from '../components/formUsers/FormContext';
import TableUsers from '../components/tablas/TableUsers';
import '../pages/css/usuarios.css';

const Usuarios = () => {
  const { users } = useContext(userProvider);

  return (
    <Container>
      <Row className="mt-3">
        <Col className="col-6">
          <FormUsers />
        </Col>
        <Col className="col-6">
          <TableUsers />
        </Col>
      </Row>
    </Container>
  );
};

export default Usuarios;
