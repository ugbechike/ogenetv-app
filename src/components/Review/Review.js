import React from 'react';
import Modal from 'react-responsive-modal';
import './Review.css';
import axios from 'axios'
 
class FeedBack extends React.Component {
  state = {
    open: false,
    review: {
        name: "",
        email: "",
        message: ''
      },
  };

  handleChange = event =>{
    this.setState({
     review: {...this.state.review, [event.target.id]: event.target.value }
    });
   };

   handleSubmit = event =>{
       event.preventDefault()
      const review = {
          message: this.state.message
      }
    axios.post('https://ogenetv.herokuapp.com/reviews/add', review )
    .then( res => {
        console.log(res)
    })
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} className='modal-btn'>Feed Back</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <form className="feedback-ogene-form"  onSubmit={this.handleSubmit}>
                    <div className='feedback-form-name'>
                             <input
                                id="name"
                                name='nanme'
                                placeholder="Name"
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange}
                                className='feedback-name'
                            /> 

                            <input
                                id="email"
                                name='email'
                                placeholder="example@example.com"
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                className='feedback-email'
                            />

                            <textarea
                                id="message"
                                placeholder="example@example.com"
                                type='message'
                                value={this.state.message}
                                onChange={this.handleChange}
                                className='feedback-message'
                            />                               
                           
                    </div>

               
                        <div className='feedback-btn-cover'>

                            <button type="submit" className='ogene-feedback-form'>Submit </button>
                        </div>
                        
                </form>
        </Modal>
      </div>
    );
  }
}

export default FeedBack