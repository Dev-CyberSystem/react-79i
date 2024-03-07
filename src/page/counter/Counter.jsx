import CounterControls from './components/CounterControls'
import CounterDisplay from './components/CounterDisplay'

const Counter = () => {
	return (
		<main className='min-vh-100 d-flex flex-column  align-items-center justify-content-center gap-4'>
			<h1 className='text-light '>Counter</h1>
			<CounterDisplay></CounterDisplay>
			<CounterControls></CounterControls>
		</main>
	)
}
export default Counter
