import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/footer/Footer'
import Navegador from './components/navegador/Navegador'
import Home from './page/home/Home'

function App() {
	return (
		<>
			<Navegador></Navegador>
			<Home></Home>
			<Footer></Footer>
		</>
	)
}

export default App
