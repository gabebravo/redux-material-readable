import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Spinner from './Spinner'
import { incrementPostScore, decrementPostScore } from '../actions'
import { getCommentsCount } from '../utils'
// const _ = require('lodash');
const moment = require('moment');

const convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

class PostList extends Component {

  printPosts = arr => {
    const countIds = getCommentsCount(this.props.comments);
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
          incrementScore={() => this.props.incrementScore(post.id)}
          decrementScore={() => this.props.decrementScore(post.id)}
        />
      )
    })
  }

  render(){
    const postView =  Array.isArray(this.props.posts) && Array.isArray(this.props.comments) ?
      this.printPosts(this.props.posts)
      : <Spinner />
    return(
      <div>
        {postView}
      </div>
    );
  }
} 

const mapStateToProps = ({ posts, comments }) => ({ posts, comments });
const mapDispatchToProps = dispatch => ({
  incrementScore: id => dispatch( incrementPostScore(id)),
  decrementScore: id => dispatch( decrementPostScore(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
