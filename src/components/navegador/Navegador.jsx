import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
const Navegador = () => {
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
							<NavLink to='/admin' className='nav-link '>
								Admin
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navegador
