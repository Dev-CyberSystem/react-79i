import { Container, Row, Col } from "react-bootstrap";
import TablaProductos from "../../components/tablas/TablaProductos";
import FormProductos from "../../components/formProductos/FormProductos";
import "./admin.css"


const Admin = () => {
  return (
    <>
      
      <Container>
      <h1>Panel de Administrador</h1>
        <Row>
          <Col>
            <FormProductos />
          </Col>
          <Col>
            <TablaProductos />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
