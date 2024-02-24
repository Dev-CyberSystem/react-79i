import useFetch from '../hooks/useFetch.hook'

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const GetPopularMovies = () => {
	const { data, isLoading, error } = useFetch(url)
	return {
		data,
		isLoading,
		error,
	}
}
