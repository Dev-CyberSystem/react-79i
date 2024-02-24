import useFetch from '../hooks/useFetch.hook'

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2'

export const GetPopularMovies = () => {
	const { data, isLoading, error } = useFetch(url)
	const firstTen = data.slice(0, 10)
	return {
		firstTen,
		isLoading,
		error,
	}
}
