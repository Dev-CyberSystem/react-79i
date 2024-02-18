import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import reactLogo from '../../assets/react.svg'
const Navegador = () => {
	return (
		<>
			<Navbar expand='lg' bg='dark' data-bs-theme='dark' sticky='top'>
				<Container>
					<Navbar.Brand href='#home'>
						<img
							src={ reactLogo }
							alt='logo'
							width='30'
							height='30'
							className='d-inline-block align-top me-2 '
						/>
						Eze Massa
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#link'>Link</Nav.Link>
							<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navegador
