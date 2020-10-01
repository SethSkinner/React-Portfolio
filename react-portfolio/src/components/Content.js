import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Content = (props) => {

    return(

        <Container fluid={true}>

            <Row className='justify-content-center'>

                <Col md={8}>

                    {props.children}

                </Col>

            </Row>

        </Container>

    );

}  

export default Content;