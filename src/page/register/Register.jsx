import { Col, Container, Row } from 'react-bootstrap'
import AuthForm from '../../components/auth-form/AuthForm'

const Register = () => {
	return (
		<Container>
			<h1 className='text-info text-center'>Register</h1>
			<Row className='d-flex justify-content-center '>
				<Col md={6}>
					<AuthForm type={'register'}></AuthForm>
				</Col>
			</Row>
		</Container>
	)
}
export default Register
