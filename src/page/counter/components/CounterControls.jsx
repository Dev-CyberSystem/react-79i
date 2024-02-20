import { Button } from 'react-bootstrap'

const CounterControls = ({ increase, decrease }) => {
	return (
		<div className='d-flex gap-5 '>
			<Button variant='success' onClick={increase}>
				+
			</Button>
			<Button variant='danger' onClick={decrease}>
				-
			</Button>
		</div>
	)
}
export default CounterControls
