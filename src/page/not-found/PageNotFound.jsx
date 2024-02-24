import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<Container>
				<Row className='w-100 min-vh-100 d-flex justify-content-center align-items-center '>
					<Col className='d-flex flex-column align-items-center  '>
						<h1 className='text-white text-center mb-4 '>Page Not found</h1>
						<Link to={'/'} className='btn btn-primary '>
							Volver al home
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	)
}
export default NotFound
