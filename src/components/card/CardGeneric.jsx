import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './cardGeneric.css'

export const CardGeneric = ({ cardImg, cardTitle, cardText }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={cardImg} />
			<Card.Body className='d-flex flex-column justify-content-between   '>
				<Card.Title className='text-center'>{cardTitle}</Card.Title>
				<Card.Text className='truncate text-center'>{cardText}</Card.Text>
			</Card.Body>

			<Button variant='primary'>Go somewhere</Button>
		</Card>
	)
}
