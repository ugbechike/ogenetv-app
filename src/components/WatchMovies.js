import React, {Component} from 'react';
import './RentMovies.css';
import './WatchMovies.css';
import Navigation from './Navigation';
// import rejected from './assets/rejected.jpg';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import like from './assets/like.png';
import axios from 'axios';

const styles = theme =>({
  button: {
    // margin: theme.spacing.unit,
    marginLeft: '123px',
    marginRight: '116px',
    borderBottomRightRadius: "10PX",
    borderTopLeftRadius: "10px",
    backgroundColor: "#5858f3",
    width: 18,
    backgroundImage: 'linear-gradient(to right, #049EE1, #312783 )',
    color: '#FFFFFF'
  },
});

class WatchMovies extends Component{
  state ={
    rentedMovie: [],
    orderMovies: [],
  }

  componentDidMount() {
    const title = this.props.match.params.id
    axios.get(`https://ogenetv.herokuapp.com/movies/find/${title}`)
    .then(res => {
      console.log(res)
      this.setState({ rentedMovie: res.data.message })
      // this.setState({ orderMovies: res.data.message })
    })

  }

// componentDidUpdate() {
//   const title = this.props.match.params.id
//     axios.get(`https://ogenetv.herokuapp.com/movies/find/${title}`)
//     .then(res => {
//       console.log(res)
//       this.setState({ rentedMovie: res.data.message })
//     })

// }

    render(){
     
      // const { classes } = this.props;
      const films = this.state.rentedMovie
    return(
      <div className='wrapper'>
        <Navigation/>
        <div className='watch-movie-container'>
              <div className='movie-video'>
                    <video   className="video-box" controls
                     source src={films.video} type="video/mp4">
                    </video>
                </div>
              </div>
            </div>
         
     
    )
  }

}

export default withStyles(styles) (WatchMovies);