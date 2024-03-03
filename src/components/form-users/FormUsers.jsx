import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useUserContext } from '../../context/UsersContext'

const initialForm = {
	name: '',
	email: '',
}

const FormUsers = ({ formType, user, handleClose }) => {
	const { addUser, editUser } = useUserContext()
	const defaultValue = !user ? initialForm : user
	const [form, setform] = useState(defaultValue)

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value.trim() })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (formType === 'add') {
			if (!form.name || !form.email) {
				alert('los campos estan vacios')
			} else {
				const userId = Date.now().toString()
				addUser({ ...form, id: userId })
				setform(initialForm)
			}
		}
		if (formType === 'edit') {
			if (!form.name || !form.email) {
				alert('los campos estan vacios')
			} else {
				editUser(user.id, form)
				setform(initialForm)
				handleClose()
			}
		}
	}

	return (
		<>
			<Container>
				<Row>
					<Col className='d-flex flex-column  justify-content-center align-items-center p-5'>
						<h2 className={formType === 'add' ? 'text-light ' : 'text-dark'}>
							{formType === 'add' ? 'Añadir usuario' : 'Editar Usuario'}
						</h2>
						<form
							className='d-flex flex-column w-50 justify-content-center align-items-center row-gap-3'
							data-type={formType}
							onSubmit={handleSubmit}>
							<label
								className={formType === 'add' ? 'text-light ' : 'text-dark'}
								htmlFor='name'>
								nombre
							</label>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
							/>
							<label
								className={formType === 'add' ? 'text-light ' : 'text-dark'}
								htmlFor='email'>
								email
							</label>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
							/>
							<button
								className={
									formType === 'add' ? 'btn btn-primary ' : 'btn btn-warning '
								}
								type='submit'>
								{formType === 'add' ? 'Agregar usuario' : 'Editar usuario'}
							</button>
						</form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default FormUsers
