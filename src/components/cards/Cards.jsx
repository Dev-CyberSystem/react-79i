import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './styleCards.css';

const Cards = () => {
    return (
        <>
            <div className='cardContainer mt-5'>
                <Card style={{ width: '18rem'}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>EJEMPLO 1</ListGroup.Item>
                        <ListGroup.Item>EJEMPLO 2</ListGroup.Item>
                        <ListGroup.Item>EJEMPLO 3</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>

        </>
    )
}

export default Cards