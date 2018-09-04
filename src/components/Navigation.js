import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom';
import Search from './Search';
import MenuToggle from './Menutoggle';
import logo from './assets/logo.png';
import './Navigation.css';
import UserToggle from './UserAccount';
import NavIcon from './NavIcons/NavIcon'
import LibraryIcon from './NavIcons/LibraryIcon'
// import Validator from "validator";
// import {connect} from 'react-redux'

const styles = {
  root: {
    flexGrow: 1,
  },
  nav:{
    backgroundColor: 'black',
  },
  flex: {
    flexGrow: 1,
    color: "blue"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  app: {
    // backgroundColor: '#002f43',
    // backgroundColor: '#0e0d0d',
    backgroundColor: 'white',
    position: 'fixed',
    top: '0px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
  },
 
};


const Navigation = (props, isAuthenticated) =>{
 
  const { classes } = props;
  if (sessionStorage.getItem('user')){
  return (
    <div className={classes.root} >
      <AppBar className={classes.app} position="static">           
        <Toolbar className={classes.app.menuButton} >
        <Typography variant="title" color="inherit" className={classes.flex}>
          <Link to ='/'><img src={logo} alt='logo' className='image-logo'/></Link>
          </Typography>
          <Search/>
          <LibraryIcon/>
          <NavIcon/>
         {/* <Link to="/"><button className='logout' onClick={ () => Logout()}>LOGOUT</button></Link> */}
         <UserToggle/>
          </Toolbar>
      </AppBar>
    </div>
  );} else{
    return (
      <div className={classes.root} >
        <AppBar className={classes.app} position="static">
         <Toolbar className={classes.app.menuButton}  >
            <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to ='/'><img src={logo} alt='logo' className='image-logo'/></Link>
            </Typography>
            <Search/>
            <NavIcon/>
            <MenuToggle/>
           </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  // isAuthenticated: PropTypes.bool.isRequired
};

// function mapStateToProps (state){
//   return{
//     isAuthenticated: !!state.user.token
//   };
// }

export default withStyles(styles)(Navigation);
