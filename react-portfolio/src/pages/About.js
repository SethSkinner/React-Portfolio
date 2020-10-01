import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const About = (props) => {

    return(

        <div>

            <Hero title={props.title} />

            <Content>

                <p>content here</p>
                <p>content here</p>
                <p>content here</p>
                <p>content here</p>

            </Content>

        </div>

    );

}

export default About;