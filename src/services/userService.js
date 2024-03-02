import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

export const usersAxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: 'application/json',
	},
})
