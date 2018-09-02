import React from "react";
import { Carousel } from "react-responsive-carousel";
import bridge from '../assets/bridge.jpg';
import rejected from '../assets/rejected.jpg';
import june from '../assets/june.jpg';
import noman from '../assets/noman.jpg';
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
                    <img src={bridge} alt='bridge' />
                    <p className="legend">Premier Movies</p>
                </div>
                <div>
                <img src={rejected} alt='suncity' />
                    <p className="legend">Now showing on ogentv</p>
                </div>
                <div>
                <img src={june} alt='june' />
                    <p className="legend">Coming soon</p>
                </div>
                <div>
                <img src={noman} alt='noman' />
                    <p className="legend">Watch Now</p>
                </div>
               
            </Carousel>
        );
    }
}
export default AppCarousel