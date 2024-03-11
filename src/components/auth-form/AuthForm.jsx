import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/features/auth/authSlice'
import {
	useAddNewUserMutation,
	useGetAllUsersQuery,
} from '../../redux/services/usersApi'

const loginValues = {
	email: '',
	password: '',
}

const registerValues = { name: '', email: '', password: '', role: 'user' }

const AuthForm = ({ type, handleClose }) => {
	const initialForm = type === 'login' ? loginValues : registerValues
	const [form, setForm] = useState(initialForm)
	const [error, setError] = useState(null)
	const { data: users } = useGetAllUsersQuery()
	const [addNewUser, { data: registerData, isSuccess: isRegisterSuccess }] =
		useAddNewUserMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const isEmptyValues = Object.values(form).some((val) => !val)

		if (isEmptyValues) {
			alert('los campos no pueden estar vacios')
			return
		} else {
			if (type === 'login') {
				const user = users.find(
					(user) => user.email === form.email && user.password === form.password
				)
				if (!user) {
					setError('Credenciales Invalidas')
					return
				}
				setError(null)
				dispatch(setUser({ name: user.name, role: user.role }))
				setForm(loginValues)
				handleClose()
				if (user.role == 'admin') {
					navigate('/admin')
				} else {
					navigate('/')
				}
			}
			if (type === 'register') {
				const user = users.find((user) => user.email === form.email)
				if (user) {
					setError('Email already register')
					return
				}
				setError(null)
				const userId = Date.now().toString()
				addNewUser({ ...form, id: userId })
				setForm(registerValues)
			}
		}
	}

	useEffect(() => {
		if (isRegisterSuccess) {
			dispatch(setUser({ name: registerData.name, role: registerData.role }))
			navigate('/')
		}
	}, [isRegisterSuccess])

	return (
		<Form onSubmit={handleSubmit}>
			{type === 'register' ? (
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label
						className={type === 'login' ? 'text-dark' : 'text-light '}>
						User name
					</Form.Label>
					<Form.Control
						type='text'
						name='name'
						placeholder='Enter your user name'
						value={form.name}
						onChange={handleChange}
					/>
				</Form.Group>
			) : null}
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label className={type === 'login' ? 'text-dark' : 'text-light '}>
					Email address
				</Form.Label>
				<Form.Control
					type='email'
					name='email'
					placeholder='Enter email'
					value={form.email}
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label className={type === 'login' ? 'text-dark' : 'text-light '}>
					Password
				</Form.Label>
				<Form.Control
					type='password'
					name='password'
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
				/>
			</Form.Group>
			{error ? <span className='text-danger d-block py-2'>{error}</span> : null}
			<Button variant='primary' type='submit'>
				{type === 'login' ? 'Iniciar Sesion' : 'Registrarse'}
			</Button>
		</Form>
	)
}
export default AuthForm
