import React from 'react';

import sethskinner from '../assets/images/sethskinner.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

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
                        title: 'Seth Skinner',
                        subTitle: 'Full-Stack Developer',
                        imgSrc: sethskinner,
                        link: '',
                        selected: false

                    },
                    {

                        id: 1,
                        title: 'My GitHub!',
                        subTitle: '@SethSkinner',
                        imgSrc: github,
                        link: 'https://github.com/SethSkinner',
                        selected: false

                    },
                    {

                        id: 2,
                        title: 'My LinkedIn!',
                        subTitle: 'sethwskinner',
                        imgSrc: linkedin,
                        link: 'https://www.linkedin.com/in/sethwskinner/',
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