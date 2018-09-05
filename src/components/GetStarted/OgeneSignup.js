import React from 'react'
import axios from 'axios';
import './OgeneSignup.css';
import {Link} from 'react-router-dom';
import spinner from '../assets/spinner.gif';
import logo from '../assets/logo.png';




class OgeneSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            loading: false,
            message: {},
            showing: false
        };
    }

    handleChange = event => {
        this.setState({

            [event.target.id]: event.target.value
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...this.state }
        this.setState({ loading: true })


        if (this.state.password !== this.state.confirmPassword) {
            alert("password don't match")
        }

        axios.post("https://ogenetv.herokuapp.com/users/signUp", data)
            .then(res => {


                if (res.data.message === 'User created successfully') {
                    this.setState({
                        message: res.data.message,
                        showing: true
                      })
                    
                    // alert(`${res.data.message} please login`)
                    // sessionStorage.setItem('user', res.data._id);
                    this.props.history.push('/ogenelogin')
                }
                this.setState({
                    loading: true
                })
                // if(res.status == 409){
                //   console.log(res)
                // }
            })
        // .catch(err =>{
        //   console.log(err.data.message)
        //   if(err.status === 409){
        //     console.log(err.data.message)
        //   }
        // })
    }




    render() {
        const {loading, message} = this.state
        return (

            <div className='signup-wrapper'>
            <div><Link to ='/'><img src={logo} alt='logo' className='image-logo'/></Link></div>
                {loading && <div className='signup-loading'><img alt="spinner" src={spinner}/></div>}
                <form className="signup-ogene-form"  onSubmit={this.handleSubmit}>
                    <div className='signup-form-username'>
                    { this.state.showing && <div>{message}</div>}
                    <div className='input-container'>
                        <i class="fa fa-user icon"></i>
                        <input
                            id="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            className='signup-username'
                            required

                        />
                         </div>
                        
                        <div className='input-container'>
                        <i class="fa fa-envelope icon"></i>
                        <input
                            id="email"
                            placeholder="example@example.com"
                            type="email"
                            name='email'
                            onChange={this.handleChange}
                            className='signup-email'
                            required
                        />
                        </div>
                        
                    </div>

                <div className='signup-form-password'>

                    <div className='input-container'>
                        <i class="fa fa-key iconkey"></i>
                    <input
                        id="password"
                        type='password'
                        name='password'
                        placeholder="Password"
                        onChange={this.handleChange}
                        className='signup-password'


                    />
                    </div>
                    
                    
                    <div className='input-container'>
                        <i class="fa fa-key icon"></i>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                        onChange={this.handleChange}
                        className='signup-confirm-password'
                    />
                    </div>
                </div>
                <div className='form-btn-cover'>

                        <button type="submit" className='ogene-signup-form'>signup</button>
                </div>
                <div className='signup-text'>
                <p>Already a member? <Link to ='ogenelogin'>Login</Link></p>
              </div>
                </form>
            </div >
          







        )
    }
}

export default OgeneSignup;