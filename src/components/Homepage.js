import React from 'react';
import Navigation from './Navigation';
import UserTab from './UserTab';
import './Homepage.css';
import '../App';
import MovieTab from './MovieTabs';
// import Trends from './Trends'



const Homepage = () =>{
  if (sessionStorage.getItem('user')){
    return(
      <div className='home'>
        <Navigation/>
        <div class="example1">
          <h3>Movie News and Updates... </h3>
       </div>
        <UserTab/>

        {/* <Trends /> */}
       
      </div>
    );
  }else{
  return(
    <div className='home'>
      <Navigation/>
        <div class="example1">
          <h3>Movie News and Updates... </h3>
       </div>
      <MovieTab/>

      
      {/* <Trends /> */}
     
    </div>
  );
}
}

export default Homepage;