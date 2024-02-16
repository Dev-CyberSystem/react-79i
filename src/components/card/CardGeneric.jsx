import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const CardGeneric = ({ cardImg, cardTitle, cardText }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={cardImg} />
			<Card.Body className='d-flex flex-column  justify-content-center '>
				<Card.Title className='text-center'>{cardTitle}</Card.Title>
				<Card.Text>{cardText}</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}
