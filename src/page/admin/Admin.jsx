import { Container, Row, Col } from "react-bootstrap";
import TablaProductos from "../../components/tablas/TablaProductos";
import FormProductos from "../../components/formProductos/FormProductos";
import TablaUsuarios from "../../components/tablas/TablaUsuarios"

export function Admin () {
  
  return (
    <>
      <h2>Administrador</h2>
      <Container>
        <Row>
          <Col>
            <FormProductos />
          </Col>
          <Col>
            <TablaProductos />
          </Col>
        </Row>
        <Row>
          <Col>
          <TablaUsuarios />
          </Col>
        </Row>
      </Container>
    </>
  );
};
