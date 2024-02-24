import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './carousel.css'

export const CarouselHome = ({ itemsArray, interval }) => {
	return (
		<>
			<Carousel data-bs-theme='light' className='carousel-container'>
				{itemsArray.map((item) => {
					return (
						<Carousel.Item key={item.id} interval={interval}>
							<Image
								src={`https://image.tmdb.org/t/p/original${item.img}`}
								className='d-block mx-auto carousel-img  '
								alt='carousel imagen'
							/>
							<Carousel.Caption className='carousel-caption-container d-none d-md-block '>
								<h3 className='text-light '>{item.title}</h3>
								<p className='text-light '>{item.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</>
	)
}
