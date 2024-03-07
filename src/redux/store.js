import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { counterSlice } from './features/counter/counterSlice'
import { moviesApi } from './services/moviesApi'
import { usersApi } from './services/usersApi'

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([moviesApi.middleware, usersApi.middleware]),
})
setupListeners(store.dispatch)
