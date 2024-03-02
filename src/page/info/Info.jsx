import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Error } from '../../components/error/Error'
import Spinner from '../../components/spinner/Spinner'
import useAxios from '../../hooks/useAxios'
import { moviesAxiosInstance } from '../../services/moviesService'

export const Info = () => {
	const params = useParams()
	const url = `/3/movie/${params.elementId}?language=en-US`

	const [movie, error, isLoading] = useAxios({
		axiosInstance: moviesAxiosInstance,
		method: 'GET',
		url: url,
	})

	return (
		<main className='container-md mb-5'>
			{isLoading && <Spinner />}
			{!isLoading && error && <Error errorMsg={error} />}
			{!isLoading && !error && movie && (
				<section className='row '>
					<div className='col-12 col-md-6'>
						<img
							src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
							alt='element image'
							className='w-100 rounded rounded-2  '
						/>
					</div>
					<div className='col-12 col-md-6 pt-2 pt-md-0   text-white text-center d-flex flex-column align-items-center justify-content-center '>
						<h1 className='text-info '>{movie.title}</h1>
						<h3>{movie.release_date.split('-')[0]}</h3>
						<p>{movie.overview}</p>
						<ListGroup horizontal className='mb-2 '>
							{movie.genres.map((genre) => {
								return (
									<ListGroup.Item key={genre.id} variant='info'>
										{genre.name}
									</ListGroup.Item>
								)
							})}
						</ListGroup>
						<p className='text-warning'>
							Raing : <span>{movie.vote_average}</span>
						</p>
					</div>
				</section>
			)}
			{!isLoading && !error && !movie && <p>No Movie info to show</p>}
		</main>
	)
}
