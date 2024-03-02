import { Table } from 'react-bootstrap'
import { Error } from '../../components/error/Error'
import FormUsers from '../../components/form-users/FormUsers'
import Spinner from '../../components/spinner/Spinner'
import { useUserContext } from '../../context/UsersContext'

export const Users = () => {
	const { users, isLoading, error, addUser } = useUserContext()

	if (error) {
		return <Error errorMsg={error}></Error>
	}

	if (!users || isLoading) {
		return <Spinner></Spinner>
	}

	return (
		<>
			<FormUsers />
			<Table striped bordered hover variant='dark' responsive='md'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	)
}
