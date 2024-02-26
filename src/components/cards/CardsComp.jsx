import { Card, Col, Row } from 'react-bootstrap';
import './styleCardsComp.css';
import PropTypes from 'prop-types'

const CardsComp = ({prodQty, prodArr}) => {
  console.log(prodQty)
  console.log(prodArr)
  return (
    <>
    <div className='m-3 cardGroup text-center'>
    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="cardGroup__cardRow">
    {/* Array.from({ length: prodQty }) */}
      {prodArr.map((item, idx) => (
        <Col className='cardGroup__cardCol g-4 mt-0 mb-4 mx-auto' key={idx}>
          <Card className='cardGroup__card'>
            <Card.Img className='cardGroup__img' variant="top" src="https://fastly.picsum.photos/id/901/200/300.jpg?hmac=hkPEpuBNrCAj1u5K7KgiXGa6ToLCG2iG5C99wLLEdKo" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Footer className='m-0 p-0'>
                <small>{`www.${item.website}`}</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
};
CardsComp.propTypes = {
  prodQty: PropTypes.number,
}
export default CardsComp;