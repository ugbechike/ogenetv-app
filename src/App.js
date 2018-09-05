import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from './components/Login';
import Signup from './components/Signup';
import RentedMovies from './components/RentedMovies';
import CategoryMovies from './components/Category';
import Error from './Error/Error';
import './App.css';
import Trends from './components/Trends';
import AdminTester from './Admintesting/AdminUpload/AdminUpload';
import RentMovies from './components/RentMovies';
import WatchMovies from './components/WatchMovies';
// import GuestRoutes from './components/AuthUser/GuestRoutes';
import UserRoutes from './components/AuthUser/UserRoutes';
import Dashboard from './Admintesting/AdminDashboard/Dashboard';
import AdminLogin from './Admintesting/AdminLogin/AdminLogin';
// import AdminRoutes from './Admintesting/AdminAuth/AdminRoutes'
import OgeneSignup from './components/GetStarted/OgeneSignup'
import OgeneLogin from './components/GetStarted/OgeneLogin'

class App extends Component {
  state = {
    isAuth: false
  }
  componentDidMount() {

  }

  render() {
    return (

      <BrowserRouter>

        <div >

          <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Homepage} exact />
            <UserRoutes exact path="/userlib" component={RentedMovies} exact />
            <Route exact path="/categories" component={CategoryMovies} exact />
            <Route exact path="/trends" component={Trends} exact />
            <Route exact path="/upload" component={AdminTester} exact />
            <Route exact path="/admin" component={Dashboard} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <UserRoutes path="/movies/:id" component={WatchMovies} exact />
            <Route exact path="/ogenesignup" component={OgeneSignup} />
            <Route exact path="/ogenelogin" component={OgeneLogin} />
            <Route exact path="/rent/:id" component={RentMovies} />
            <Route component={Error} />

          </Switch>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
