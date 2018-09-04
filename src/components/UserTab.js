import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RecentMovies from './Recent';
import CategoryMoviesTab from './Categorytab';
import './MovieTaps.css';
import Trends from './Trends';
import RecentFilms from './RecentFilms/RecentFilms'
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import axios from 'axios'
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import RentedMovies from './RentedMovies'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: '92%',
    margin: 'auto',
    // marginTop: "75px",
    backgroundColor: 'transparent',
    // paddingTop: '90px',
    paddingTop: '0px',
  },
  background: {
    backgroundColor: '#e4ebf1',
    color: 'white'
  },

  navBar: {
    // backgroundColor: '#002f43',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: 'white'
  },

  typo: {
    color: 'none'
  }
});

class UserTab extends React.Component {
  state = {
    value: 0,
    category: [],
    categoryMovies: []
  };

  componentWillMount() {
    axios.get(`https://ogenetv.herokuapp.com/categories/`)
      .then(res => {
        console.log(res)
        this.setState({ category: res.data.categories })
      })
  }

  getCategoryNames = (name) => {
    axios.get(`https://ogenetv.herokuapp.com/movies/get?category=${name}`)
      .then(res => {
        console.log(res)
        this.setState({
          categoryMovies: res.data.message
        })
      })
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.navBar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            // textColor="#049ee1"
            // Color="white"
          >
            <Tab label="Rented Movies"  />

            <Tab label="Movies" />

            {this.state.category.map(tabs => (
              <Tab label={tabs.name} key={tabs.id} onClick={() => this.getCategoryNames(tabs.name)} />
            ))}
            {/* <Tab label="Item One" icon={<PhoneIcon />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
            <Tab label="Item Four" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} /> */}
          </Tabs>
        </AppBar>
       

        <div className=''>
        {this.state.value === 0 &&
        <div>
          <RentedMovies/>
          </div>
        }

          {this.state.value === 1 &&
            <div><RecentFilms /></div>
          }

          {this.state.value === 2 &&
            <div className='category-container'>
              {
                this.state.categoryMovies.map(filmTab => (
                  <div className='category-image-container'>
                    <img src={filmTab.image} alt='' className='category-image' />
                    <div className="overlay">{filmTab.title}</div>
                  </div>
                ))
                }
            </div>
          }
          {this.state.value === 3 && <div className='category-container'>
            {this.state.categoryMovies.map(filmTab => (
              <div className='category-image-container'>
                <img src={filmTab.image} alt='' className='category-image' />
                <div className="overlay">{filmTab.title}</div>
              </div>
            ))}
          </div>}
          {this.state.value === 4 && <div className='category-container'>
            {this.state.categoryMovies.map(filmTab => (
              <div className='category-image-container'>
                <img src={filmTab.image} alt='' className='category-image' />
                <div className="overlay">{filmTab.title}</div>
              </div>
            ))}
          </div>}
          {this.state.value === 5 && <div className='category-container'>
            {this.state.categoryMovies.map(filmTab => (
              <div className='category-image-container'>
                <img src={filmTab.image} alt='' className='category-image' />
                <div className="overlay">{filmTab.title}</div>
              </div>
            ))}
          </div>}
          {this.state.value === 6 && <div className='category-container'>
            {this.state.categoryMovies.map(filmTab => (
              <div className='category-image-container'>
                <img src={filmTab.image} alt='' className='category-image' />
                <div className="overlay">{filmTab.title}</div>
              </div>
            ))}
          </div>}

        </div>
        {/* <TabContainer dir={theme.direction}><RecentMovies/></TabContainer>
          <TabContainer dir={theme.direction}><Trends/></TabContainer> */}
        {/* </SwipeableViews> */}
      </div>
    );
  }
}

UserTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserTab);




































































// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import RecentMovies from './Recent';
// import CategoryMoviesTab from './Categorytab';
// import Trends from './Trends';
// import RentedMovies from './RentedMovies'

// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//       {children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// };

// const styles = theme => ({
//   root: {
//     // backgroundColor: theme.palette.background.paper,
//     width: '92%',
//     margin: 'auto',
//     // marginTop: "73px",
//     backgroundColor: 'transparent',
//     paddingTop: '5px',
//   },

//   navBar:{
//     // backgroundColor: '#002f43',
//     backgroundColor: 'transparent',
//     boxShadow: 'none',
//   },

//   background: {
//     backgroundColor: '#e4ebf1'
//   },

//   typo: {
//     color: 'none'
//   }
// });

// class UserTab extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   handleChangeIndex = index => {
//     this.setState({ value: index });
//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default" className={classes.navBar}>
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             // textColor="primary"
//             className={classes.typo} 
//             fullWidth
//           >
//             <Tab label="Rented Movies" />
//             <Tab label="Recent" />
//             <Tab label="Category" />
//             <Tab label="Trends" />
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={this.state.value}
//           onChangeIndex={this.handleChangeIndex}
//           className={classes.background}
//         >
//         <TabContainer dir={theme.direction}><RentedMovies/></TabContainer>
//           <TabContainer dir={theme.direction}><RecentMovies/></TabContainer>
//           <TabContainer dir={theme.direction}><CategoryMoviesTab/></TabContainer>
//           <TabContainer dir={theme.direction}><Trends/></TabContainer>
//         </SwipeableViews>
//       </div>
//     );
//   }
// }

// UserTab.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(UserTab);
