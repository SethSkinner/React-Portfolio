import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Hero = (props) => {

    return(

        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>

            <Container fluid={true}>

                <Row className='justify-content-center py-5'>

                    <Col md={8} sm={12}>

                        { props.title && <h1 className='display-1 font-weight-bolder text-center'>{props.title}</h1> }
                        <br></br>
                        { props.subTitle && <h3 className='display-4 font-weight-light text-center'>{props.subTitle}</h3> }
                        <hr></hr>
                        { props.text && <h3 className='lead font-weight-light text-center'>{props.text}</h3> }

                    </Col>

                </Row>

            </Container>

        </Jumbotron>

    );

}

export default Hero;