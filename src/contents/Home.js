import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Social from '../components/Social'
import Contact from './Contact';
import Portfolio from './Portfolio';
import ReactCardFlip from 'react-card-flip';
import About from './About';




class Home extends Component {
    render() {
        return (
            <div>
                <Contact />
                <About />
                <Portfolio />
            </div>

        )
    }
}

export default Home
