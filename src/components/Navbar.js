import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <div className="condiv">
                    <h1>Joseph Mattern</h1>
                    <ReactTypingEffect className="typingeffect" text={['Full Stack', 'Python Developer', 'A Problem Solver!']} speed={50} eraseDelay={900} />
                </div>
                <Social />
            </nav>
        )
    }
}

export default Navbar


//<Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
    //                <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
    //                <Navitem item="Portfolio" tolink="/portfolio" activec={this.activeitem}></Navitem>
     //               <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>

     //<img src={profilepic} className="profilepic"></img>