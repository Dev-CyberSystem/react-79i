import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Productos = () => {
  const { productos } = useContext(ProductsProvider);

  return (
    <>

    <h1>Componente de Productos</h1>
    
    {productos.length === 0 ? 
      (
        <h1>No se encontró ningún producto disponible.</h1>
      ) : (
        <Container fluid>
          <Row className='justify-content-center'>
            {productos.map( (producto) => (
              <>
              <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={ {width: '18rem' } } className='m-3'>
                  <Card.Img variant="top" src={producto.imagen}/>
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.precio}</Card.Text>
                    <Button variant='danger'>Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
              </>
            ))}
          </Row>
        </Container>
    )}
    </>
  );
};

Productos.propTypes = {
  funcionProps: PropTypes.func,
  club: PropTypes.object,
  count: PropTypes.number
}

export default Productos;
