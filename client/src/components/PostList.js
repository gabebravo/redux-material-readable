import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { fetchComments } from '../utils'
import { initComments } from '../actions'
const moment = require('moment');

const convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

const printPosts = arr => {
  return arr.map( post => {
    return (
      <Post 
        key={post.id}
        id={post.id}
        title={post.title}
        timestamp={convertUnixToDate(post.timestamp)}
        author={post.author}
        category={post.category}
        voteScore={post.voteScore}
        body={post.body}
      />
    )
  })
}

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

  render(){
    return(
      <div>
        {printPosts(this.props.posts)}
      </div>
    );
  }
} 

const mapStateToProps = (comment) => ({ comment });
const mapDispatchToProps = dispatch => ({
    loadComments: comment => dispatch( initComments(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
