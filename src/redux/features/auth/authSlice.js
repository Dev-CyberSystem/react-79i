import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		name: null,
		role: null,
	},
	reducers: {
		setUser: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload))
			state.name = action.payload.name
			state.role = action.payload.role
		},
		logout: (state) => {
			localStorage.clear()
			state.name = null
			state.role = null
		},
	},
})
export const authSelector = (state) => state.auth
export const { setUser, logout } = authSlice.actions
