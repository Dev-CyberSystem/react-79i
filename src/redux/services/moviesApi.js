import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org',
		prepareHeaders: (headers) => {
			headers.set(
				'authorization',
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWUwODJlZWI4MzNhYTUwYzBmN2E4MmFlNjdmNjZhNyIsInN1YiI6IjY1ZDdmMzU4OTkyNTljMDE2MjkzNjk1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1lWGlRsuu0NKN1n2mpuoKRs-Ychby1khq7pFoccaPl8'
			)
			return headers
		},
	}),
	endpoints: (builder) => ({
		getPopularMovies: builder.query({
			query: () => '/3/movie/popular?language=en-US&page=2',
		}),
		getPopularMoviesByPage: builder.query({
			query: (page) => `/3/movie/popular?language=en-US&page=${page}`,
		}),
		getMovieInfo: builder.query({
			query: (movieId) => `/3/movie/${movieId}?language=en-US`,
		}),
	}),
})

export const {
	useGetPopularMoviesQuery,
	useGetPopularMoviesByPageQuery,
	useGetMovieInfoQuery,
} = moviesApi
