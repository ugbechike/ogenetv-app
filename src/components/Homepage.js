import React from 'react';
import Navigation from './Navigation';
import UserTab from './UserTab';
import './Homepage.css';
import '../App';
import MovieTab from './MovieTabs';
import AppCarousel from './Carousel/Carousel'
import FeedBack from './Review/Review'
// import Trends from './Trends'



const Homepage = () =>{
   return(
    <div className='home'>
      <Navigation/>
      <AppCarousel />
       
      <FeedBack/>
      <MovieTab/>
      
     
     
    </div>
  );
}


export default Homepage;