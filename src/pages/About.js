import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const About = (props) => {

    return(

        <div>

            <Hero title={props.title} />

            <Content>

                <p>
                    My name is Seth Skinner and I am a full-stack developer based out of Nashville, Tn. I have just completed the Vanderbilt Code Academy MERN stack program offered through trilogy.
                    In this program i learned how to effectively use many different types of technology related to writing code. This would include HTML, CSS, JS, Node.js, MYSQL, MongoDB, Mongo Atlas,
                    and React. I am very commited to becoming the best developer that I can be and I am actively taking other courses online to continue to grow into the skills neccessary to become 
                    an effective web developer.
                </p>

                <img src='https://i.postimg.cc/Z560cyGJ/IMG-20200620-131018.jpg' className='picofme'/>


            </Content>

        </div>

    );

}

export default About;