import './styleInformation.css';
import {Carousel, Card, Row, Col} from 'react-bootstrap';

const Information = () => {
    const customerReviews = [
        {
          id: 1,
          name: 'Lionel Messi',
          comment: '"Excelentes productos, definitivamente mi store favorita."',
          rating: 5,
          image: 'https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1'
        },
        {
          id: 2,
          name: 'Michael Jordan',
          comment: '"Muy satisfecho con la calidad de los productos."',
          rating: 4,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michael_Jordan.jpg/220px-Michael_Jordan.jpg'
        },
        {
          id: 3,
          name: 'Ronaldinho',
          comment: '"¡Recomiendo este negocio a todos mis amigos!"',
          rating: 5,
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg'
        }
    ];

  return (

    <Carousel className='p-5'>
      {customerReviews.map((review) => (
        <Carousel.Item className='p-5' key={review.id}>
          <Card>
            <Card.Body>
              <Row className='align-items-center'>
                <Col xs={12} sm={4}>
                  <img src={review.image} alt="Cliente" className="img-fluid" />
                </Col>
                <Col xs={12} sm={8}>
                  <Card.Title className='mt-3'>{review.name}</Card.Title>
                  <Card.Text>{review.comment}</Card.Text>
                  <Card.Text>Rating: {review.rating}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>


  )
}

export default Information