import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchdata = async () => {
		try {
			const response = await axios.get(url, {
				headers: {
					accept: 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUwODJlZWI4MzNhYTUwYzBmN2E4MmFlNjdmNjZhNyIsInN1YiI6IjY1ZDdmMzU4OTkyNTljMDE2MjkzNjk1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1lWGlRsuu0NKN1n2mpuoKRs-Ychby1khq7pFoccaPl8',
				},
			})
			setData(response.data.results)
			setIsLoading(false)
			setError(null)
		} catch (error) {
			setIsLoading(false)
			setError(error)
		}
	}

	useEffect(() => {
		fetchdata()
	}, [url])

	return {
		data,
		isLoading,
		error,
	}
}
export default useFetch
