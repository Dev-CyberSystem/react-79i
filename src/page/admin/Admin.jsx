import { Col, Container, Row } from 'react-bootstrap'
import FormProductos from '../../components/formProductos/FormProductos'
import TablaProductos from '../../components/tablas/TablaProductos'
import FormUsuarios from '../../components/formUsuarios/FormUsuarios'
import TablaUsuarios from '../../components/tablas/TablaUsuarios'

const admin = () => {
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

        <hr />

        <Row>
            {/* <Col>
                <FormUsuarios />
            </Col> */}

            <Col className='mt-5'>
                <TablaUsuarios />
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default admin