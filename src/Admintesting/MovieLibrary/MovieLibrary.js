import React from 'react';
import axios from 'axios';
import './MovieLibrary.css';

class MovieLibrary extends React.Component {
  state = {
    spacing: '16',
    movies: [ ]
  };
  
  componentDidMount(){
    
    axios.get(`https://ogenetv.herokuapp.com/movies/`)
    .then(res => {
      console.log(res)
      this.setState({ movies: res.data.movies})
      console.log(this.state.movies)
    })
    
  }

  
  render(){
    return(
        <table id="customers">
            <tr>
                <th>Movie_Id</th>
                <th>Movie Poster</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
                {this.state.movies.map(admin =>{
        return(
            <tr key={admin.id}>

                <td >{admin._id}</td>
                <td className='image-table' ><img src={admin.image} alt={admin.title} style={{width:'35%'}}/></td>
                <td >{admin.price}</td>
                <td > <button className='danger-btn' onClick={()=> {
                                  axios.get(`https://ogenetv.herokuapp.com/movies/delete/${admin._id}`)
                                  .then(res =>{
                                    console.log(res)
                                  })
                                  window.location.reload()
                                }}>Delete</button></td>
            </tr>)
                })}
                
        </table>
    )
}
}
  


export default MovieLibrary;