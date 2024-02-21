import { Container, Row, Col, Button } from 'react-bootstrap';
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp"

const Admin = () => {
  return (
    <>
    <Container>
        <Row>
            <Col className='col-auto mx-auto'>
                <CardsCtrlComp></CardsCtrlComp>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Admin