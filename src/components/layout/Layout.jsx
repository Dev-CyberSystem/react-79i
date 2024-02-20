import { Outlet as Page } from 'react-router'
import Footer from '../footer/Footer'
import Navegador from '../navegador/Navegador'

const Layout = () => {
	return (
		<>
			<Navegador></Navegador>
			<Page></Page>
			<Footer></Footer>
		</>
	)
}
export default Layout
