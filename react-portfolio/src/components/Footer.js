import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer = () => {

    return(

        <footer className='mt-5 footer'>

            <Container fluid={true}>

                <Row className='border-top justify-content-between p-3'>

                    <Col className='p-0' md={3} sm={12}>                        
                        Seth Skinner
                    </Col>
                    <Col>

                        <div>

                        <a href="https://www.linkedin.com/in/SethWSkinner">
                            <i className="fab fa-linkedin-in "></i>
                        </a> 
                        <a href="https://www.github.com/SethSkinner">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="334-701-8717">
                            <i className="fa fa-phone"></i>
                        </a> 

                        </div>

                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>                        
                        This site was made by @SethSkinner
                    </Col>

                </Row>

            </Container>

        </footer>

    );

}

export default Footer;