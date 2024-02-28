import "./styleCardsComp.css";
import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { DataProvider } from '../../context/DataContext';
import { useContext } from 'react';

const CardsComp = () => {
  const { prodQty, prodArr } = useContext(DataProvider);
  const trimmedArr = [...prodArr]
  trimmedArr.splice(prodQty)
  return (
    <>
    <div className='m-3 cardGroup text-center'>
    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="cardGroup__cardRow">
      {trimmedArr.map((item, idx) => (
        <Col className='cardGroup__cardCol g-4 mt-0 mb-4 mx-auto' key={idx}>
          <Card className='cardGroup__card h-100'>
            <Card.Header className='py-1 px-0 fw-bold fs-5'>{item.name}</Card.Header>
            <Card.Img className='cardGroup__img' variant="top" src={`https://picsum.photos/200?random=${idx}`} />
            <Card.Body>
              <article>
                <p className='lead m-0'>Empresa:</p>
                <p>{item.company.name}</p>
              </article>
              <article>
                <p className='lead m-0'>Area de trabajo</p>
                <p>{item.company.catchPhrase}</p>
              </article>
              <article>
                <p className='lead'>Mi Especialidad? :</p>
                <p className="blockquote-footer">{item.company.bs}</p>
              </article>
            </Card.Body>
            <Card.Footer>
              <small>{item.email}</small>
            </Card.Footer>
              <Card.Footer className='py-0'>
                <small>{`www.${item.website}`}</small>
              </Card.Footer>
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
  prodArr: PropTypes.array
}
export default CardsComp;