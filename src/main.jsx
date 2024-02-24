import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import './index.css'
import Home from './page/home/Home.jsx'
import NotFound from './page/not-found/PageNotFound.jsx'
import Counter from './page/counter/Counter.jsx'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/counter',
				element: <Counter />,
			},
		],
		errorElement: <NotFound></NotFound>,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
