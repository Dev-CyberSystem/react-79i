import { Card, Col, Row } from 'react-bootstrap';
import './styleCardsComp.css';

const CardsComp = () => {
  return (
    <>
    <div className='m-3 cardGroup'>
    <Row xs={1} md={3} className="g-4 cardGroup__cardRow">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col className='cardGroup__cardCol' key={idx}>
          <Card className='cardGroup__card'>
            <Card.Img variant="top" src="https://fastly.picsum.photos/id/901/200/300.jpg?hmac=hkPEpuBNrCAj1u5K7KgiXGa6ToLCG2iG5C99wLLEdKo" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
};

export default CardsComp;