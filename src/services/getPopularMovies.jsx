import useFetch from '../hooks/useFetch.hook'

const url = 'https://api.themoviedb.org/3/mov'

export const GetPopularMovies = () => {
	const { data, isLoading, error } = useFetch(url)
	return {
		data,
		isLoading,
		error,
	}
}
