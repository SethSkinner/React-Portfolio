import React from 'react';

import travelplanner from '../assets/images/travelplanner.png';
import personalfestival from '../assets/images/personalfestival.png';
import employeedirectory from '../assets/images/employeedirectory.png';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        
        super(props);
            this.state = {

                items: [

                    {

                        id: 0,
                        title: 'Travel-Planner',
                        subTitle: 'App to plan you\'re travel',
                        imgSrc: travelplanner,
                        link: 'https://sethskinner.github.io/Travel-Planner/',
                        selected: false

                    },
                    {

                        id: 1,
                        title: 'Personal-Festival',
                        subTitle: 'App to make a personal festival',
                        imgSrc: personalfestival,
                        link: 'https://serene-sands-67688.herokuapp.com/',
                        selected: false

                    },
                    {

                        id: 2,
                        title: 'Employee-Directory',
                        subTitle: 'App to be able to sort and search employees',
                        imgSrc: employeedirectory,
                        link: 'https://sethskinner.github.io/Employee-Directory/',
                        selected: false

                    },

                ]

            }

    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {

            if(item.id) {

                item.selected= false;
                
            }

        });

        this.setState({

            items

        });

    }

    makeItems = (items) => {

        return items.map(item => {

            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>

        })

    }

    render() {

        return(

            <Container fluid={true}>

                <Row className='justify-content-around'>

                    {this.makeItems(this.state.items)}

                </Row>

            </Container>

        );

    }

}

export default Carousel;