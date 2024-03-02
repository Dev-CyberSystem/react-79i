import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const initialForm = {
	name: '',
	email: '',
}

const FormUsers = () => {
	const [form, setform] = useState(initialForm)

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<>
			<Container>
				<Row>
					<Col className='d-flex flex-column  justify-content-center align-items-center p-5'>
						<h2 className='text-light text-center '>Añadir Usuario</h2>
						<form className='d-flex flex-column w-50 justify-content-center align-items-center row-gap-3'>
							<label className='text-light ' htmlFor='name'>
								nombre
							</label>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
							/>
							<label className='text-light ' htmlFor='email'>
								email
							</label>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
							/>
							<button className='btn btn-primary ' type='submit'>
								Agregar
							</button>
						</form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default FormUsers
