import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Spinner from './Spinner'
import { getPostsAsArray, getCommentsCount } from '../utils'
// const _ = require('lodash');
const moment = require('moment');

const convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

class PostList extends Component {

  printPosts = arr => {
    const countIds = getCommentsCount(this.props.comments.byId)
    return arr.map( post => {
      return (
        <Post 
          key={post.id}
          id={post.id}
          title={post.title}
          comments={countIds[post.id] || 0}
          timestamp={convertUnixToDate(post.timestamp)}
          author={post.author}
          category={post.category}
          voteScore={post.voteScore}
          body={post.body}
        />
      )
    })
  }

  render(){
    const postView =  Array.isArray(this.props.posts.allIds) && Array.isArray(this.props.comments.allIds) ?
      this.printPosts(getPostsAsArray(this.props.posts.allIds, this.props.posts.byId))
      : <Spinner />
    return(
      <div>
        {postView}
      </div>
    );
  }
} 

const mapStateToProps = ({ posts, comments }) => ({ posts, comments });

// {printPosts(this.props.posts)}
// const mapDispatchToProps = dispatch => ({
//     loadComments: comment => dispatch( initComments(comment)),
// });

export default connect(mapStateToProps)(PostList)
