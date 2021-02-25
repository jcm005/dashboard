import React, { Component } from 'react';
import Algotrader from '../components/algotrader';
import Facereco from '../components/facereco'
import './content.css'


class Portfolio extends Component {
    render() {
        return (
            <div className='condiv portfolio_head'>
                <h2>Portfolio</h2>
                <a>
                    <Algotrader />
                    <Facereco />
                </a>


            </div>








        )
    }
}

export default Portfolio

//link black dim db mw5 pa2 br2 ba b--black-10 shadow-1

// <a className='condiv mt4 link dim black' style={{ height: '150px', width: '650px', left: '10%', top: '62%' }}>
//<p className=''>Food.io</p>
//</a>

//<Algotrader />
//<Facereco />