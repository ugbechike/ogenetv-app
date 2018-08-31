import React, { Component} from "react"
import './Comment.css';
import axios from 'axios'

class CommentList extends Component{
    constructor(props){
        super(props)

        this.createList = this.createList.bind(this);
    }
    createList(item){
        return (
            <div>
            <i className='fa fa-user'><li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li></i></div>)
    } 

    delete(key){
        this.props.delete(key)
    }

    render(){
        let commentEntries = this.props.entries;
        let listItem =commentEntries.map(this.createList);

        return(
            <div className=''>
                <ul className='theList'>
                    {listItem}
                </ul>
            </div>
        );
    }


}
export default CommentList