import { ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Error } from '../../components/error/Error'
import Spinner from '../../components/spinner/Spinner'
import useFetch from '../../hooks/useFetch.hook'

export const Info = () => {
	const params = useParams()
	const url = `https://api.themoviedb.org/3/movie/${params.elementId}?language=en-US`

	const { data, isLoading, error } = useFetch(url)

	if (error) {
		return <Error errorMsg={error.response.data.status_message}></Error>
	}

	if (!data.genres || isLoading) {
		return <Spinner></Spinner>
	}

	return (
		<main className='container-md mb-5'>
			<section className='row '>
				<div className='col-12 col-md-6'>
					<img
						src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
						alt='element image'
						className='w-100 rounded rounded-2  '
					/>
				</div>
				<div className='col-12 col-md-6 pt-2 pt-md-0   text-white text-center d-flex flex-column align-items-center justify-content-center '>
					<h1 className='text-info '>{data.title}</h1>
					<h3>{data.release_date.split('-')[0]}</h3>
					<p>{data.overview}</p>
					<ListGroup horizontal className='mb-2 '>
						{data.genres.map((genre) => {
							return (
								<ListGroup.Item key={genre.id} variant='info'>
									{genre.name}
								</ListGroup.Item>
							)
						})}
					</ListGroup>
					<p className='text-warning'>
						Raing : <span>{data.vote_average}</span>
					</p>
				</div>
			</section>
		</main>
	)
}
