import { useState } from 'react'
import CounterControls from './components/CounterControls'
import CounterDisplay from './components/CounterDisplay'

const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
		<main className='min-vh-100 d-flex flex-column  align-items-center justify-content-center gap-4'>
			<h1 className='text-light '>Counter</h1>
			<CounterDisplay counter={counter}></CounterDisplay>
			<CounterControls setCounter={setCounter}></CounterControls>
		</main>
	)
}
export default Counter
