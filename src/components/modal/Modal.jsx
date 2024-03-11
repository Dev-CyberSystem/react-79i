import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CustomModal = ({ show, handleClose, children, title }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer className='d-flex justify-content-between '>
				{title === 'Iniciar Sesion' ? (
					<p>
						No tenes cuenta?
						<Link to={'/register'} onClick={handleClose}>
							Registrate
						</Link>
					</p>
				) : null}
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
