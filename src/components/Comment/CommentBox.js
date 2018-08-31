import React, { Component } from 'react';
import CommentList from './CommentList'
import './Comment.css';

class CommentBox extends Component{
    constructor(props){
        super(props)
        this.state={
            comments: []
        }
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    addList(e){
        if(this._inputElement.value !==""){
                
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            console.log(newItem)
            this.setState((prevState) =>{
                return{
                    comments: prevState.comments.concat(newItem)
                }
            });
        }
        this._inputElement.value = "";
        console.log(this.state.comments)
        e.preventDefault();
    }

    deleteItem(key){
        let removeItem = this.state.comments.filter(function(item){
            return (item.key !== key)
        });
        this.setState({
            comments: removeItem
        })
    }
    render(){
        return(
            
            <div className='text'>
            <CommentList entries={this.state.comments}
            delete={this.deleteItem}/>
          
                <form onSubmit={this.addList}>
                    <input ref={(a)=>this._inputElement=a}
                    placeholder='enter text'/>
                    <button type='sumbit'>Add</button>
                </form>
               
            </div>
            
           
           
        );
    }
}

export default CommentBox;