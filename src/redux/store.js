import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from './features/auth/authSlice'
import { counterSlice } from './features/counter/counterSlice'
import { moviesApi } from './services/moviesApi'
import { usersApi } from './services/usersApi'

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([moviesApi.middleware, usersApi.middleware]),
})
setupListeners(store.dispatch)
