import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { counterSlice } from './features/counter/counterSlice'
import { moviesApi } from './services/moviesApi'

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
})
setupListeners(store.dispatch)
