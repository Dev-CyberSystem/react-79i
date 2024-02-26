/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function CardComponent({ title, price }) {
  return (
    <Card className="bg-transparent text-white border-0">
      <Card.Img src="/src/assets/img/cards/hades.jpg" className="rounded-4" />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <div>
          <Button className="btn btn-light fw-bold">JUEGO CARD</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default CardComponent;
