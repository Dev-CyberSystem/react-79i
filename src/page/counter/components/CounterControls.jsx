import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
	decrement,
	increment,
} from '../../../redux/features/counter/counterSlice'

const CounterControls = () => {
	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(increment())
	}

	const handleDecrement = () => {
		dispatch(decrement())
	}

	return (
		<div className='d-flex gap-5 '>
			<Button variant='success' onClick={handleIncrement}>
				+
			</Button>
			<Button variant='danger' onClick={handleDecrement}>
				-
			</Button>
		</div>
	)
}
export default CounterControls
