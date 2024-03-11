import { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import { authSelector, logout } from '../../redux/features/auth/authSlice'
import AuthForm from '../auth-form/AuthForm'
import { CustomModal } from '../modal/Modal'
const Navegador = () => {
	const [show, setShow] = useState(false)
	const { name, role } = useSelector(authSelector)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}
	return (
		<>
			<Navbar expand='lg' bg='dark' data-bs-theme='dark' sticky='top'>
				<Container>
					<Navbar.Brand>
						<NavLink to='/' className='nav-link '>
							<img
								src={reactLogo}
								alt='logo'
								width='30'
								height='30'
								className='d-inline-block align-top me-2 '
							/>
							Eze Massa
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink to='/' className='nav-link '>
								Home
							</NavLink>
							<NavLink to='/movies' className='nav-link '>
								Movies
							</NavLink>
							<NavLink to='/counter' className='nav-link '>
								Counter
							</NavLink>
							{role && role === 'admin' && (
								<NavLink to='/admin' className='nav-link '>
									Admin
								</NavLink>
							)}
						</Nav>
						{name && role ? (
							<Button variant={'warning'} onClick={handleLogout}>
								Logout
							</Button>
						) : (
							<Button variant={'info'} onClick={handleShow}>
								Login
							</Button>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<CustomModal show={show} handleClose={handleClose} title='Iniciar Sesion'>
				<AuthForm
					formTitle={'Iniciar Sesion'}
					type={'login'}
					handleClose={handleClose}
				/>
			</CustomModal>
		</>
	)
}

export default Navegador
