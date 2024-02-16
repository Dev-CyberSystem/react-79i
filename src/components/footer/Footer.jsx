import { Image } from 'react-bootstrap'
import reactLogo from '../../assets/react.svg'
const Footer = () => {
	return (
		<>
			<section className='container-fluid'>
				<ul className='row list-unstyled d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-0 '>
					<li className='col-12 col-md-4 '>
						<h4 className='text-center '>Ezequiel Massa</h4>
					</li>
					<li className='col-12 col-md-4'>
						<Image
							src={reactLogo}
							className='d-block mx-auto'
							style={{ width: '3rem' }}></Image>
					</li>
					<li className='col-12 col-md-4'>
						<h5 className='text-center '>©️ 2024</h5>
					</li>
				</ul>
			</section>
		</>
	)
}

export default Footer
