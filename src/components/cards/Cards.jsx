import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Cards = () => {

  const cardData = [
    {
      id: 1,
      imgSorce: '../src/assets/Cards/blackmouse.png'
    }
    ,
    {
      id: 2,
      imgSorce: '../src/assets/Cards/btc.png'
    },
    {
      id: 3,
      imgSorce: '../src/assets/Cards/valorant.jpg'
    },

  ];

  return (
      <Row xs={1} md={3} className="g-4">
        {Array.from(cardData).map((card) => (
          <Col key={card.id}>
            <Card>
              <Card.Img variant="top" src={card.imgSorce} style={{ width: '100px', height: '100px' }}/>
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
  );
}

export default Cards