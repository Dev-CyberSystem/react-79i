import { Container, Row, Col } from "react-bootstrap"
import TablaProductos from "../../components/tablas/TablaProductos"

const Admin = () => {
  return (
    <>
    <h2>Administrador</h2>
    <Container>
        <Row>
            <Col>
            Formulario
            </Col>
            <Col>
            <TablaProductos />
            </Col>
        </Row>
    </Container>



</>

  )
}

export default Admin