import React from 'react'
import axios from 'axios'

class OgeneSignup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         username: "",
         email: "",
         password:"",
         confirmPassword: "",
         loading: false,
        };
    }

    handleChange = event =>{
        this.setState({
   
          [event.target.id]: event.target.value
        });
     
       };
   
       handleSubmit = (e) => {
         e.preventDefault();
         let data = {...this.state}
         this.setState({loading: true})
         
   
           if(this.state.password !== this.state.confirmPassword){
             alert("password don't match")
           }
             
         axios.post("https://ogenetv.herokuapp.com/users/signUp", data)
         .then(res =>{
           
           
           if (res.status === 200){
             alert(`${res.data.message} please login`)
             // sessionStorage.setItem('user', res.data._id);
             this.props.history.push('/login')
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
   



    render(){
        return(
                <div>
                    <form className='form-control'>
                        
                      <div className='email-name'>
                            <input
                            id="username"
                            label="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                                                    
                            />

                            <input
                            id="email"
                            placeholder="example@example.com"
                            type="email"
                            name='email'
                            onChange={this.handleChange}
                                                
                            />
                        </div>
                        <div className='password'>

                            <input
                            type='text'
                            name='password'
                            placeholder="Password"
                            onChange={this.handleChange}
                            
                            
                            />
                            <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="psw" 
                            required
                            onChange={this.handleChange}
                        />
                        </div>

                       <button type="button" className='signup-btn'>Upload</button>
                    </form>
                </div>

        )
    }
}

export default OgeneSignup;