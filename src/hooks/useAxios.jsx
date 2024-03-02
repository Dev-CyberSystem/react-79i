import { useEffect, useState } from 'react'

const useAxios = (configObj) => {
	const { axiosInstance, method, url, requestConfig = {} } = configObj
   console.log('useAxios')
	const [response, setResponse] = useState([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const [reload, setReload] = useState(0)

	const refetch = () => setReload((prev) => prev + 1)

	useEffect(() => {
		let isMounted = true
		const controller = new AbortController()

		const fetchData = async () => {
			try {
				const res = await axiosInstance[method.toLowerCase()](url, {
					...requestConfig,
					signal: controller.signal,
				})
				if (isMounted) {
					setResponse(res.data)
					setError(null)
				}
			} catch (err) {
				if (isMounted) {
					setError(err.message)
					setResponse([])
				}
			} finally {
				isMounted && setLoading(false)
			}
		}
		fetchData()

		return () => {
			isMounted = false
			controller.abort()
		}

		// eslint-disable-next-line
	}, [reload, url])

	return [response, error, loading, refetch]
}

export default useAxios
