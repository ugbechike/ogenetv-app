import React from "react";
import { Carousel } from "react-responsive-carousel";
import bandits from '../assets/bandits.png';
import banks from '../assets/banks.png';
import mike from '../assets/mike.png';
import perfect from '../assets/perfect.png';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.css';
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

class AppCarousel extends React.Component{
    render() {
        return (
            <Carousel autoPlay >
                <div>
                    <img src={bandits} alt='bridge' />
                    <p className="legend">Premier Movies</p>
                </div>
                <div>
                <img src={banks} alt='suncity' />
                    <p className="legend">Now showing on ogentv</p>
                </div>
                <div>
                <img src={mike} alt='june' />
                    <p className="legend">Coming soon</p>
                </div>
                <div>
                <img src={perfect} alt='noman' />
                    <p className="legend">Watch Now</p>
                </div>
               
            </Carousel>
        );
    }
}
export default AppCarousel