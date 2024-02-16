import { Image } from 'react-bootstrap'

export const InfoSection = () => {
	return (
		<section className='row d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center bg-dark p-4 bg-opacity-50 '>
			<div className='col-12 col-md-6  d-flex justify-content-center mb-2 mb-md-0 '>
				<div className='overflow-hidden'>
					<Image
						src='https://loremflickr.com/500/400'
						className='object-fit-cover rounded'
						alt='info imagen'></Image>
				</div>
			</div>
			<div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-light'>
				<p className='fs-5 p-4 bg-gradient text-bg-dark  shadow '>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
					aliquam ea mollitia nesciunt quas vero laudantium maiores non quo quam
					corrupti rerum eveniet similique deserunt quae aliquid, iste velit?
					Aspernatur voluptatum ab ullam placeat laborum soluta laboriosam
					voluptatem maxime recusandae rem incidunt asperiores perferendis ipsum
					et id voluptate, accusantium illum?
				</p>
			</div>
		</section>
	)
}
