import React from 'react';
import home from '../assets/home.png'
import './NavIcon.css';
import {Link } from 'react-router-dom';

const NavIcon = () => {
    return(
        <Link to='/'>
        <div className='homeicon'>
            <img src={home} alt='' className='home-icon-image'/>
        </div>
        </Link>
    )
}

export default NavIcon