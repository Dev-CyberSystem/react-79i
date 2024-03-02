import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org'

export const moviesAxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUwODJlZWI4MzNhYTUwYzBmN2E4MmFlNjdmNjZhNyIsInN1YiI6IjY1ZDdmMzU4OTkyNTljMDE2MjkzNjk1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1lWGlRsuu0NKN1n2mpuoKRs-Ychby1khq7pFoccaPl8',
	},
})
