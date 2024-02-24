import { Col, Container, Row } from 'react-bootstrap'

export const Error = ({ errorMsg }) => {
	return (
		<Container>
			<Row>
				<Col>
					<h2 className='text-info text-center '>
						Oops ... something went wrong
					</h2>
					<h3 className='text-info text-center '>{errorMsg}</h3>
				</Col>
			</Row>
		</Container>
	)
}
