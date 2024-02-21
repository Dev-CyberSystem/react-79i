import { Button } from 'react-bootstrap'

const CounterControls = ({ setCounter }) => {
	const increment = () => {
		setCounter((prev) => prev + 1)
	}

	const decrease = () => {
		setCounter((prev) => {
			if (prev > 0) {
				return prev - 1
			}
			return prev
		})
	}

	return (
		<div className='d-flex gap-5 '>
			<Button variant='success' onClick={increment}>
				+
			</Button>
			<Button variant='danger' onClick={decrease}>
				-
			</Button>
		</div>
	)
}
export default CounterControls
