import { CardGeneric } from '../../components/card/CardGeneric'
import { CarouselHome } from '../../components/carousel/Carousel'
import { Error } from '../../components/error/Error'
import { InfoSection } from '../../components/info/Info'
import Spinner from '../../components/spinner/Spinner'
import { useGetPopularMoviesQuery } from '../../redux/services/moviesApi'
import './Home.css'

const Home = () => {
	const { data: movies, isError: error, isLoading } = useGetPopularMoviesQuery()

	if (error) {
		return <Error errorMsg={error.response.data.status_message}></Error>
	}

	return (
		<>
			<article className='container-fluid  my-2'>
				<section className='row'>
					<div className='col'>
						{!movies || !movies.results || isLoading ? (
							<Spinner />
						) : (
							<CarouselHome
								itemsArray={movies.results?.slice(0, 3).map((item) => {
									return {
										title: item.original_title,
										id: item.id,
										img: item.backdrop_path,
										description: item.overview,
									}
								})}
								interval={2000}></CarouselHome>
						)}
					</div>
				</section>
			</article>

			<h1 className='text-center py-2 text-light '>Peliculas destacadas</h1>
			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col-12 d-flex flex-wrap justify-content-center align-items-stretch gap-4'>
						{!movies || !movies.results || isLoading ? (
							<Spinner />
						) : (
							movies.results
								.slice(0, 10)
								.map((movie) => (
									<CardGeneric
										key={movie.id}
										elementId={movie.id}
										cardImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
										cardTitle={movie.title}
										cardText={movie.overview}></CardGeneric>
								))
						)}
					</div>
				</section>
			</article>

			<h2 className='text-center py-2 text-light '>Nuestra recomendacion</h2>
			<article className='container-md mb-5 '>
				{!movies || !movies.results || isLoading ? (
					<Spinner />
				) : (
					<InfoSection
						info={{
							img: movies.results[1].backdrop_path,
							text: movies.results[1].overview,
						}}></InfoSection>
				)}
			</article>
		</>
	)
}

export default Home
