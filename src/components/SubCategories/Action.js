import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Navigation from '../Navigation';
// import {Link} from 'react-router-dom';
import '../Homepage.css';
import '../Recent.css';
import './Action.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
// import Homepage from './Homepage';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    margin: 0,
  },

  cards: {
    flexGrow: 0,
    maxWidth: '100%',
    padding: '20px',
    flexBasis: 'auto!important',
  },
  paper: {
    width: 235,
    height: 158,
    cursor: 'pointer',
    backgroundColor: '#0e0d0d',
    zIndex: 10,
    marginRight: '15px',
    marginBottom: 145,
  },

  // paper: {
  //   height: 255,
  //   width: 191,
  //   borderBottomRightRadius: "15PX",
  //   borderTopLeftRadius: "15px",
  //   backgroundColor: '#0e0d0d',
  //   zIndex: 10,
  //   marginRight: '13px',
  //   boxShadow: '2px 1px 5px #474141',
  // },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ActionMovies extends React.Component {
  state = {
    spacing: '16',
    movies: []
  };

  componentDidMount(){
    
    axios.get(`https://ogenetv.herokuapp.com/movies/get?category=Action`)
    .then(res => {
      console.log(res)
      this.setState({ movies: res.data.message})
      console.log(this.state.movies)
    })
    
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
       <div>
      <Grid container className={classes.root} spacing={16}>
            <Grid item xs={6} sm={3} className={classes.cards}>
            <Grid container className={classes.paperCards} justify="center" spacing={Number(spacing)}>
                {this.state.movies.map(movie => (
                <Grid key={movie._id} item>
                    <Paper className={classes.paper} >
                    <Link to={{
                              pathname: `/rent/${movie._id}`,
                              state: { movies: movie.title}
                              }}>
                        <div className="image-api">
                          <img className='image-style' src={movie.image} alt=''/>
                          <div class="overlay">Click to view</div>
                        </div>
                    </Link>
                          <div className="items">
                            <div className="sub-items">
                              <p>{movie.title.length < 20 ? `${movie.title}`: `${movie.title.substring(0, 25)}...`}</p>
                            </div>
                            <div className='star-rating'>
                            <span>{movie.category}</span>
                            </div>
                            <hr/>
                            <div className='rating'>
                              <div className='sub-item2'>
                              <p className='price'>&#8358;{movie.price}</p>
                              </div>
                              <div className="sub-item1">
                                 <i className='fa fa-eye'> 1M</i>
                              </div>
                            </div>
                          </div>
                    </Paper>
                </Grid>
                ))}
            </Grid>
            </Grid>
      </Grid>
      </div>
    );
  }
}

ActionMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionMovies);