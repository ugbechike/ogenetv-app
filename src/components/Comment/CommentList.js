import React, { Component} from "react"
import './Comment.css';
import axios from 'axios'

console.clear();

const Title = ({commentCount}) => {
    return (
		<div>
			<div>
				<h1><i className='fa fa-comments'></i>&nbsp; Comments &nbsp; ({commentCount})</h1> <br />
			</div>
		</div>
    );
}


	const CommentForm = ({addComment}) => {
		let input;
    return (
		<form onSubmit={(e) => {
            e.preventDefault();
			addComment(input.value);
			input.value = '';
		}}>
			<textarea className="form-control col-md-6" placeholder='Enter Comments here' ref={node => {
				input = node;
			}} />
            <br />
            <button type='submit'>Comment</button>
		</form>
    );
};



class Comment extends React.Component{

   
    render(){
        const {comment} = this.props
	return (
		<div className='commentBody'>
			<span className='commentAvatar'>
				<i className='fa fa-user'></i>
			</span>
			<span className='commentName smoke'> {comment.userId} </span>
			<hr />
			<span className='commentComment smoke'> {comment.text} </span>
			<hr />
			<span className='commentStars'><i className='fa fa-thumbs-up'></i><span id='star'></span></span>
			
		</div>
    );
}
}

// Map through the comments
const CommentList = ({comments}) => {
	const commentNode = comments.map((comment) => {
		return (<Comment comment={comment} key={comment.id}/>)
	});
	return (<div className='commentgroup' style={{marginTop:'30px'}}>{commentNode}</div>);
}

  // Contaner Component
  // Comment Id
  window.id = 0;


class CommentComp extends React.Component{
	constructor(props){
		super(props);
		// Pass props to parent class
		// Set initial state
		this.state = {
            data: [],
            movieId: ''
		}
    // this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
    this.postApi = 'https://ogenetv.herokuapp.com//comments/add'
    const title = this.props.movie
    this.getApi = `https://ogenetv.herokuapp.com/movies/find/${title}`
}
    // Lifecycle method
    componentWillUpdate(){
      // Make HTTP reques with Axios
		axios.get(this.getApi)
        .then((res) => {
            console.log(res)
          // Set state with result
			this.setState({data:res.data});
        });
       
    }
    // Add comment handler
    addComment(val){
      // Assemble data
        const comment = {text: val,
                    userId: sessionStorage.getItem('user'),
                    movieId: this.props.movie
                        }
                        console.log(comment)
      // Update data
		axios.post(this.postApi, comment)
        .then((res) => {
            console.log(res)
            this.state.data.push(res.data);
            this.setState({data: this.state.data});
        });
    }


    render(){
      // Render JSX
		return (
			<div style={{padding: 30}}>
				<Title commentCount={this.state.data.length}/>
				<CommentList comments={this.state.data} />
				<CommentForm addComment={this.addComment.bind(this)}/>
			</div>
		);
    }
}

export default CommentComp;























// class CommentList extends Component{
//     constructor(props){
//         super(props)

//         this.createList = this.createList.bind(this);
//     }
//     createList(item){
//         return (
//             <div>
//             <i className='fa fa-user'><li onClick={() => this.delete(item.key)}
//                     key={item.key}>{item.text}</li></i></div>)
//     } 

//     delete(key){
//         this.props.delete(key)
//     }

//     render(){
//         let commentEntries = this.props.entries;
//         let listItem =commentEntries.map(this.createList);

//         return(
//             <div className=''>
//                 <ul className='theList'>
//                     {listItem}
//                 </ul>
//             </div>
//         );
//     }


// }
// export default CommentList