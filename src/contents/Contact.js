import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h2>Contact Me</h2>

                <div className="">
                    <h3>Email:<p>matternjoe@gmail.com</p></h3>
                    <h3>Phone<p>(631) 704-3733</p></h3>
                    <a href="https://drive.google.com/file/d/1WIZwPkSAdOP6WOWlHXd8iyETgc--BW-z/view?usp=sharing">
                        <div className="back3 glass">Download Resume</div>
                    </a>
                    <a href="mailto:matternjoe@gmail.com">
                        <div className="back3 back4 glass">Contact Me</div>
                    </a>
                </div>
            </div >
        )
    }
}

export default Contact
