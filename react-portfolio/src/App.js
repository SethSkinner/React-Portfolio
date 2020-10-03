import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {

    super(props);
      this.state = {

        title: 'Seth Skinner',
          headerLinks: [

            {title: 'Home', path: '/React-Portfolio'},
            {title: 'About', path: '/about'},
            {title: 'Contact', path: '/contact'} 

        ],

        home: {

          title:'Keep Pursuing!',
          subTitle: 'Hard work makes all the difference!',
          text: 'Checkout my projects below'

        },

        about: {

          title: 'About Me!'

        },

        contact: {

          title: 'I would love to talk!'

        }

    }

  }

render () {

  return (

    <Router>

      <Container className='p-0' fluid={true}>

        <Navbar className='border-bottom' bg='transparent' expand='lg'>

          <Navbar.Brand>Seth Skinner</Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
          <Navbar.Collapse id='navbar-toggle'>

            <Nav className='ml-auto'>

              <Link className='nav-link' to='/React-Portfolio'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>

        <Route path='/React-Portfolio' exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
        <Route path='/about' render={() => <About title={this.state.about.title} />} />
        <Route path='/contact' render={() => <Contact title={this.state.contact.title} />} />

        <Footer />

      </Container>

    </Router>

    );

  }

}

export default App;
