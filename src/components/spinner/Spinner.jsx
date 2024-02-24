import Spin from 'react-bootstrap/Spinner'
import './spinner.css'

function Spinner() {
	return (
		<div className='spinner-container'>
			<Spin animation='grow' variant='info' className='spinner' />
		</div>
	)
}

export default Spinner
