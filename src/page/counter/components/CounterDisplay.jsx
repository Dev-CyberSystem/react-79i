import { useSelector } from 'react-redux'
import { counterSelector } from '../../../redux/features/counter/counterSlice'

const CounterDisplay = () => {
	const counter = useSelector(counterSelector)
	return <h2 className='border border-2 p-5 text-light  '>{counter}</h2>
}
export default CounterDisplay
