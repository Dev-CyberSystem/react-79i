import { useSelector } from 'react-redux'
import NotFound from '../../page/not-found/PageNotFound'
import { authSelector } from '../../redux/features/auth/authSlice'

export const PrivateRoute = ({ children }) => {
	const { role } = useSelector(authSelector)

	return role === 'admin' ? children : <NotFound></NotFound>
}
