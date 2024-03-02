import { Outlet as Page } from 'react-router'
import { UserContextProvider } from '../../context/UsersContext'
import Footer from '../footer/Footer'
import Navegador from '../navegador/Navegador'

const Layout = () => {
	return (
		<>
			<UserContextProvider>
				<Navegador></Navegador>
				<Page></Page>
				<Footer></Footer>
			</UserContextProvider>
		</>
	)
}
export default Layout
