import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

export const CarouselHome = () => {
	return (
		<>
			<Carousel data-bs-theme='dark'>
				<Carousel.Item interval={1000}>
					<Image
						src='https://loremflickr.com/600/400'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3 className='text-light '>First slide label</h3>
						<p className='text-light '>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<Image
						src='https://loremflickr.com/600/400'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3 className='text-light '>Second slide label</h3>
						<p className='text-light '>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src='https://loremflickr.com/600/400'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3 className='text-light '>Third slide label</h3>
						<p className='text-light '>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	)
}
