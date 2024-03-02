import { useEffect, useState } from 'react'
import { CardGeneric } from '../../components/card/CardGeneric'
import { Error } from '../../components/error/Error'
import Spinner from '../../components/spinner/Spinner'
import useAxios from '../../hooks/useAxios'
import { moviesAxiosInstance } from '../../services/moviesService'

export const Movies = () => {
	const [page, setPage] = useState(1)
	const [url, setUrl] = useState('/3/movie/popular?language=en-US&page=1')
	const [movies, error, isLoading] = useAxios({
		axiosInstance: moviesAxiosInstance,
		method: 'GET',
		url: url,
	})

	useEffect(() => {
		setUrl(`/3/movie/popular?language=en-US&page=${page}`)
	}, [page])

	function nextPage() {
		setPage((prev) => prev + 1)
	}
	function prevPage() {
		setPage((current) => {
			if (current > 1) {
				return current - 1
			}
			return current
		})
	}

	return (
		<>
			<h1 className='text-center py-2 text-light '>Peliculas</h1>
			<h4 className='text-light text-center '>{`Pagina : ${page}`}</h4>
			<div className=' d-flex justify-content-center py-4 gap-2 '>
				<button className='btn btn-primary ' onClick={prevPage}>
					Pagina anterior
				</button>
				<button className='btn btn-primary ' onClick={nextPage}>
					Siguiente pagina
				</button>
			</div>

			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col-12 d-flex flex-wrap justify-content-center align-items-stretch gap-4'>
						{isLoading && <Spinner />}
						{!isLoading && error && <Error errorMsg={error} />}
						{!isLoading &&
							!error &&
							movies &&
							movies.results.map((movie) => (
								<CardGeneric
									key={movie.id}
									elementId={movie.id}
									cardImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
									cardTitle={movie.title}
									cardText={movie.overview}></CardGeneric>
							))}
						{!isLoading && !error && !movies && <p>No Movies to show</p>}
					</div>
				</section>
			</article>
		</>
	)
}
