import { Table } from 'react-bootstrap'
import { Error } from '../../components/error/Error'
import Spinner from '../../components/spinner/Spinner'
import useFetch from '../../hooks/useFetch.hook'

const url = 'https://jsonplaceholder.typicode.com/users'

export const Users = () => {
	const { data, isLoading, error } = useFetch(url)

	if (error) {
		return <Error errorMsg={error.response.data.status_message}></Error>
	}

	if (!data || isLoading) {
		return <Spinner></Spinner>
	}

	return (
		<Table striped bordered hover variant='dark' responsive='md'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user) => {
					return (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}
