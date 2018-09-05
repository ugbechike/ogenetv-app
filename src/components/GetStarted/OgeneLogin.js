import React from 'react'
import axios from 'axios';
import './OgeneLogin.css';
import {Link} from 'react-router-dom';
import spinner from '../assets/spinner.gif';
import Validator from "validator";
import InlineError from '../Messages/InlineErrors';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';




class OgeneLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          user: {
            email: "",
            password: "",
          },
         loading: false,
         errors: {},
         showing: false
        };
    }
   
    handleChange = event =>{
      this.setState({
       user: {...this.state.user, [event.target.id]: event.target.value }
      });
     };
     
     submit = user =>{
       axios.post("https://ogenetv.herokuapp.com/users/login", user, {headers: { }})
       .then(res =>{
         if(res.data.message === 'email or password invalid'|| res.data.message === 'email does not exist'){
             this.setState({
             errors: res.data.message,
             showing: true
           })
           window.location.reload();
       }else{
         this.setState({
           loading: false
         })
         sessionStorage.setItem('user', res.data.currentUser.id);
         this.props.history.push('/')
         console.log('user')
         // window.location.reload();
       }
         this.setState({
           loading: false
         })
       })
   
       // this.props.history.push('/');
     }
 
     handleSubmit = (e) =>{
       e.preventDefault();
       this.setState({ loading: true})
       const errors = this.validate(this.state.user);
       this.setState({errors});
       //    this.setState({ loading: false})
       if(Object.keys(errors).length ===0){
           
           this.submit(this.state.user)
         this.setState({ loading: false})
       }
     };
 
     validate = user => {
      const errors = {};
      
      if (!Validator.isEmail(user.email)) errors.email = "Invalid Email";
     if (!user.password) errors.password = "cant be blank";
     return errors;
     
     }
 




    render() {
        const {loading, errors} = this.state
        return (

            <div className='login-wrapper'>
            <div><Link to ='/'><img src={logo} alt='logo' className='image-logo'/></Link></div>
                {loading && <div className='signup-loading'><img alt="spinner" src={spinner}/></div>}
                <form className="login-ogene-form"  onSubmit={this.handleSubmit}>
                    <div className='login-form-username'>
                                <div>
                            { this.state.showing && <div>{errors}</div>}
                            </div>
                            <div className='input-container'>
                                <i class="fa fa-envelope icon"></i>
                                <input
                                id="email"
                                name='email'
                                placeholder="example@example.com"
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                className='login-username'

                                />
                            </div>
                            {errors.email && <InlineError text={errors.email}/>}
                        
                            <div className='input-container'>
                                <i class="fa fa-key icon"></i>
                                    <input
                                        id="password"
                                        type='password'
                                        value={this.state.password}
                                        name='password'
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                        className='login-email'

                                    />
                            </div>
                            {errors.password && <InlineError text={errors.password}/>}
                            <br/>
                    </div>

               
                        <div className='login-btn-cover'>

                                <button type="submit" className='ogene-login-form'>Login </button>
                        </div>
                        <div className='signup-text'>
                        <p>Don't have an account? <Link to='/ogenesignup'>Sign up</Link></p>
                        </div>
                </form>
            </div >
          







        )
    }
}


OgeneLogin.propTypes = {
    classes: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };

export default OgeneLogin;