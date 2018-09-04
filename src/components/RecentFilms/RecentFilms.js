import React from 'react';
import './RecentFilms.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import spinner from '../assets/spinner.gif';



class RecentFilms extends React.Component{

      state = {
           films: [],
           loading: false
      }
   
      
      
      componentDidMount(){
        this.setState({loading: true})
    
        axios.get(`https://ogenetv.herokuapp.com/movies/`)
        .then(res => {
          console.log(res)
          this.setState({ films: res.data.movies})
          console.log(this.state.films)
          this.setState({loading: false})
        })
    }

render(){
    const {loading} = this.state
    return(
        <div className='recent-films-container'>
        {loading && <div className='rented-loading'><img alt="spinner" src={spinner}/></div>}
            {this.state.films.map(film => (
                <div className='recent-film-cards'>
                <Link to={{
                          pathname: `/rent/${film._id}`,
                                    state: { films: film.title}
                                    }}>
                    <img className="recent-film-image" src={film.image} alt='film' />
                    <div className="overlay">{film.title}</div>
                </Link>
                </div>
            ))}
        </div>
     
        
    );
}
}

export default RecentFilms
