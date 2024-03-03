import { createContext, useContext, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { usersAxiosInstance } from '../services/userService'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState([])
	const [data, error, isLoading, refetch] = useAxios({
		axiosInstance: usersAxiosInstance,
		method: 'GET',
		url: '/users',
	})

	const addUser = async (user) => {
		await usersAxiosInstance.post('/users', user)
		refetch()
	}

	const deleteUser = async (userId) => {
		await usersAxiosInstance.delete(`/users/${userId}`)
		refetch()
	}

	const editUser = async (userId, updatedUser) => {
		await usersAxiosInstance.put(`/users/${userId}`, updatedUser)
		refetch()
	}

	useEffect(() => {
		setUsers(data)
	}, [data])

	return (
		<UserContext.Provider
			value={{ users, isLoading, error, addUser, deleteUser, editUser }}>
			{children}
		</UserContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUserContext must be used within a UserContextProvider')
	}
	return context
}
