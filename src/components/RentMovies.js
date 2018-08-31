import React, { Component } from 'react';
import './RentMovies.css';
import Navigation from './Navigation';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './Recent.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import CommentBox from './Comment/CommentBox'
import {withRouter} from 'react-router-dom' 


const styles = theme => ({
  // button: {
  //   // margin: theme.spacing.unit,
  //   marginLeft: '123px',
  //   marginRight: '116px',
  //   borderBottomRightRadius: "10PX",
  //   borderTopLeftRadius: "10px",
  //   backgroundColor: "#5858f3",
  //   width: 18,
  //   backgroundImage: 'linear-gradient(to right, #049EE1, #312783 )',
  //   color: '#FFFFFF'
  // },
});

// const Api_key = 'a7d7788c2a57044879237c810d135ba0';



class RentMovies extends Component {
  state = {
    activeMovie: [],
    rentMovies: [],
    userId: sessionStorage.getItem('user'),
    userEmail: '',
    price: '',
    movieId: ''
  }
  
  componentDidMount() {
    const title = this.props.match.params.id
    axios.get(`https://ogenetv.herokuapp.com/movies/find/${title}`)
    .then(res => {
      console.log(res)
      this.setState({ activeMovie: res.data.message })
      this.setState({price: res.data.message.price})
      this.setState({movieId: res.data.message._id})
    })

    
    axios.get(`https://ogenetv.herokuapp.com/movies/`)
    .then(res => {
      this.setState({ rentMovies: res.data.movies })
    })
    
      // axios.get("https://ogenetv.herokuapp.com/users/login")
      // .then(res => {
      //   this.setState({userEmail: res.data.currentUser.email})
      // })
      // console.log(this.state.userEmail)
    }
    
    componentDidUpdate() {
      const title = this.props.match.params.id;
      axios.get(`https://ogenetv.herokuapp.com/movies/find/${title}`)
      .then(res => {
        this.setState({ activeMovie: res.data.message })
      })
    
    }
    
    
   
    payWithPaystack=(id)=> {
      console.log("I started")
      if (sessionStorage.getItem('user')){    
    const PaystackPop = window.PaystackPop;
    const userDetail = sessionStorage.getItem('user')
    axios.get(`https://ogenetv.herokuapp.com/admin/getUser/${userDetail}`)
    .then(res => {
      console.log(res.data.message[0].email)
      this.setState({
        userEmail: res.data.message[0].email
      })
      var handler = PaystackPop.setup({
        key: 'pk_test_29a0330305edfb58ed040868d44dddd2bbbb3d35',
        email: this.state.userEmail,
        amount: this.state.price * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
            custom_fields: [{
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }]
        },
        callback: (response) => {
          const details = {
            user: this.state.userId,
            movie: this.state.movieId,
            refNo: response.reference,
          }
          console.log(details)
          axios.post('https://ogenetv.herokuapp.com/users/buy', details)
          .then(res=> {
          console.log(res.data)
          if(res.data.message == 'Movie Purchase Successful'){
            alert(res.data.message); 
            this.props.history.push(`/movies/${id}`)

          }
          })
          console.log(response)
           
          },
        onClose: function () {
            alert('window closed');
        }
        
    });
    handler.openIframe();

    })
    

  }else{
  this.props.history.push('/login')
  }
}

// renderRoute = (title) =>{
//   this.props.history.push(`/movies/${title}`)
// }

 
  render() {
    // console.log(this.props)
    // const { classes } = this.props;
    const film = this.state.activeMovie
    return (
      <div className='wrapper'>
        <Navigation />
        <div className='container'>
          <div className='container-card'>
            <div className='more-details-container'>
              <div className='rent-image'>
                <img src={film.image} alt="film" className='rent-image'  />
              </div>
              <div className='details-container-box'>
                <div className='movie-title'>
                  <p>{film.title}</p>
                </div>
                <div className='rent-details'>
                  <p>
                    {film.description}
                  </p>
                </div>
                <div>
                  <div className='like-btn'>
                    <p>Year of Rlease:  {film.releaseYear}</p>
                  </div>
                  <div className='like-btn'>
                    <p>Rating:  4.5</p>
                  </div>
                  <div className='rent-btn'>
                    {/* <Link to={{
                      pathname: `/movies/${film._id}`,
                      state: { movies: film.title }
                    }}> */}
                      <Button variant="contained" color="primary" style={{marginLeft: '0px'}} type="submit" onClick={() => this.payWithPaystack(`${film._id}`)}>
                        Rent
                      </Button>
                    {/* </Link> */}
                  </div>
                  </div>
                <br />
              </div>
            </div>
              {/* <CommentBox /> */}
          </div>
          <div>
          </div>
          <div className='container-card-col'>
            {this.state.rentMovies.map(val => (
              <div key={val} className='rent-movie-container'>
                {/* <img src={val.image} alt="film" style={{width: '100%', borderRadius: '4px', height: '423px'}}/> */}
                <div className="image-api">
                  <img className="recent-image" src={val.image} alt='' />
                </div>
                <div className="rent-items">
                  <div className="sub-items">
                    <p>{val.title.length < 20 ? `${val.title}` : `${val.title.substring(0, 25)}...`}</p>
                  </div>
                  <div className='star-rating'>
                   <p>Rating: 4.2</p>
                  </div>
                  <div className='rent-movie-rating'>
                    <div className='sub-item2'>
                      <p>price: {film.price}</p>
                    </div>
                    <div className="sub-item1">
                      <Link to={{
                        pathname: `/rent/${val._id}`,
                        state: { movies: val.title }
                      }}><button className='rent-view-btn'>More Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default withStyles(styles)(withRouter(RentMovies));