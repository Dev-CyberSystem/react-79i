import { Container, Row, Col } from "react-bootstrap"
import TablaProductos from "../../components/tablas/TablaProductos"
import TablaUsuarios from "../../components/tablas/TablaUsuarios"
import FormProductos from "../../components/formProductos/FormProductos"
import FormUsuarios from "../../components/formUsuarios/FormUsuarios"


const Administrador = () => {
  return (
    <>
      <h3 className="text-center mt-4 mb-5">Administrador</h3>
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
          <FormUsuarios />
          </Col>
          <Col>
          <TablaUsuarios />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Administrador