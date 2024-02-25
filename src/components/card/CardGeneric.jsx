import Card from 'react-bootstrap/Card'
import './cardGeneric.css'
import { Link } from 'react-router-dom'

export const CardGeneric = ({ cardImg, cardTitle, cardText, elementId }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={cardImg} />
			<Card.Body className='d-flex flex-column justify-content-between   '>
				<Card.Title className='text-center'>{cardTitle}</Card.Title>
				<Card.Text className='truncate text-center'>{cardText}</Card.Text>
			</Card.Body>

			<Link className='btn btn-primary ' to={`/info/${elementId}`}>
				Ver
			</Link>
		</Card>
	)
}
