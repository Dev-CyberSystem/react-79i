import { useState } from 'react'
import CounterControls from './components/CounterControls'
import CounterDisplay from './components/CounterDisplay'

const Counter = () => {
	const [counter, setCounter] = useState(0)

	const increase = () => {
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
		<main className='min-vh-100 d-flex flex-column  align-items-center justify-content-center gap-4'>
			<h1>Counter</h1>
			<CounterDisplay counter={counter}></CounterDisplay>
			<CounterControls
				increase={increase}
				decrease={decrease}></CounterControls>
		</main>
	)
}
export default Counter
