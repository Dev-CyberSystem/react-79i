import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet as Page } from 'react-router'
import { setUser } from '../../redux/features/auth/authSlice'
import Footer from '../footer/Footer'
import Navegador from '../navegador/Navegador'

const Layout = () => {
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('user')) || {}

	useEffect(() => {
		dispatch(setUser(user))
	}, [])

	return (
		<>
			<Navegador></Navegador>
			<Page></Page>
			<Footer></Footer>
		</>
	)
}
export default Layout
