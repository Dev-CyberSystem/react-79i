import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp"
import { useState } from "react";


const Admin = ({hookSet, monitor, hookReset}) => {

    // const [count, setCount] = useState(10);
    
    // const hookSet = (qty) => {
    //     setCount(count+qty)
    //     console.log(count+qty)
    // }

  return (
    <>
    <Container fluid className='admin__body'>
        <Row>
            <Card className='bg-warning mb-4'>
            <h1 className='text-center p-0 m-0'>ADMIN PANEL</h1>
            </Card>
        </Row>
        <Row>
            <Col className='col-auto mx-auto'>
                <CardsCtrlComp hookSet={hookSet} monitor={monitor} />
            </Col>
        </Row>
        <Row>
            <Col className='col-auto mx-auto'>
                <Button className="ctrl__button" onClick={() => hookReset()+console.log("btn 'Restablecer' presionado en page Admin.jsx")}>Restablecer</Button>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Admin