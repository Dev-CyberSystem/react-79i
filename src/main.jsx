import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import './index.css'
import { Admin } from './page/admin/Admin.jsx'
import Counter from './page/counter/Counter.jsx'
import Home from './page/home/Home.jsx'
import { Info } from './page/info/Info.jsx'
import { Movies } from './page/movies/Movies.jsx'
import NotFound from './page/not-found/PageNotFound.jsx'
import { store } from './redux/store.js'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'info/:elementId',
				element: <Info />,
			},
			{
				path: 'movies',
				element: <Movies />,
			},
			{
				path: 'counter',
				element: <Counter />,
			},
			{
				path: 'admin',
				element: <Admin />,
			},
		],
		errorElement: <NotFound></NotFound>,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
