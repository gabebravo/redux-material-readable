import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { fetchComments, reduceNumOfComments } from '../utils'
import { initComments } from '../actions'
const moment = require('moment');

const convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

class PostList extends Component {

  componentDidMount() {
    fetchComments(this.props.posts)
      .then( result => {
        const filteredComments = result.filter(comment => comment.data.length > 0)
        const mappedComments = [];
        filteredComments.map( comment => {
          mappedComments.push(...comment.data)
        })
        this.props.loadComments(mappedComments)
      })
  }

  printCommentCount = (obj, id) => {
    console.log('obj', obj)
    console.log('id', id)
    return obj[id] || 0;
  }

  printPosts = arr => {
    const {comments} = this.props.comment;
    if(Array.isArray(comments.allIds)){
      const commentsCount = reduceNumOfComments(comments.allIds);
      return arr.map( post => {
        return (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            timestamp={convertUnixToDate(post.timestamp)}
            comments={this.printCommentCount(commentsCount, post.id)}
            author={post.author}
            category={post.category}
            voteScore={post.voteScore}
            body={post.body}
          />
        )
      })
    }
  }

  render(){
    return(
      <div>
        {this.printPosts(this.props.posts)}
      </div>
    );
  }
} 

const mapStateToProps = (comment) => ({ comment });
const mapDispatchToProps = dispatch => ({
    loadComments: comment => dispatch( initComments(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
