import React from 'react';
import Library from '../assets/library.png'
import './LibraryIcon.css';
import {Link } from 'react-router-dom';


const LibraryIcon = () => {
    return(
        <Link to="/userlib">
        <div className='lib-icon'>
            <img src={Library} alt='' className='lib-icon-image'/>
        </div>
        </Link>
    )
}

export default LibraryIcon