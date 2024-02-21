import { Container, Row, Col } from 'react-bootstrap';
import './styleFooterComp.css'

const FooterComp = () => {
  return (
    <>
    <Container fluid className='mt-2 mt-md-5'>
      <Row>
        <Col>
          <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                    <hr className="col-11 mx-auto mb-5"/>
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <img className='img-fluid col-3' src="https://5.imimg.com/data5/IV/QN/NX/SELLER-4453508/trademark-logo-registration-service-1000x1000.jpg" alt="Trademark Logo" />
                        <h5 className="text-uppercase mt-2">Footer Content</h5>
                        <p>Here you can fill with your content.</p>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='col-11 mx-auto'/>
            <div className="footer-copyright text-center py-3">© 2024 Copyright:
                <a href="https://google.com/" target='_blank' rel='noopener noreferrer nofollow'> WhatEver.com.ar</a>
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
    </>
  )
};
export default FooterComp