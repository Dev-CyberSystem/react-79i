import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => '/users',
			providesTags: ['Users'],
		}),
		addNewUser: builder.mutation({
			query: (newUser) => ({
				url: '/users',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: newUser,
			}),
			invalidatesTags: ['Users'],
		}),
		updateUser: builder.mutation({
			query: (updatedUser) => ({
				url: `/users/${updatedUser.id}`,
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: updatedUser,
			}),
			invalidatesTags: ['Users'],
		}),
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `/users/${userId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Users'],
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useAddNewUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersApi
