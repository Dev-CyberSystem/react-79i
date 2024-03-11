import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Error } from '../../components/error/Error'
import FormUsers from '../../components/form-users/FormUsers'
import { CustomModal } from '../../components/modal/Modal'
import Spinner from '../../components/spinner/Spinner'
import { authSelector } from '../../redux/features/auth/authSlice'
import {
	useDeleteUserMutation,
	useGetAllUsersQuery,
} from '../../redux/services/usersApi'

export const Admin = () => {
	const {
		data: users,
		isError: error,
		isLoading,
		error: resError,
	} = useGetAllUsersQuery()

	const [deleteUser] = useDeleteUserMutation()
	const { name } = useSelector(authSelector)
	const [show, setShow] = useState(false)
	const [user, setUser] = useState(null)

	const handleClose = () => setShow(false)
	const handleShow = (user) => {
		setUser(user)
		setShow(true)
	}
	const handleDelete = (user) => {
		if (user.role === 'admin') {
			alert('no se puede elimniar el usuario con rol admin')
		} else {
			deleteUser(user.id)
		}
	}

	if (error) {
		return <Error errorMsg={resError.error}></Error>
	}

	if (!users || isLoading) {
		return <Spinner></Spinner>
	}

	return (
		<>
			<h1 className='text-light text-center py-2 '>Hola {name}</h1>
			<FormUsers formType='add' />
			<Table
				striped
				bordered
				hover
				variant='dark'
				responsive='md'
				className='w-50 mx-auto '>
				<thead>
					<tr className='text-center'>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id} className='text-center '>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td className='d-flex justify-content-center gap-4 '>
								<Button variant='warning' onClick={() => handleShow(user)}>
									Editar
								</Button>
								<Button variant='danger' onClick={() => handleDelete(user)}>
									Eliminar
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<CustomModal show={show} handleClose={handleClose} title='Editar Usuario'>
				<FormUsers formType='edit' user={user} handleClose={handleClose} />
			</CustomModal>
		</>
	)
}
