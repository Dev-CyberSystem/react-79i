import { Button, Modal } from 'react-bootstrap'

export const CustomModal = ({ show, handleClose, children }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
