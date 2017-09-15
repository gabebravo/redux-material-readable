import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import Spinner from './Spinner'
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
        />
      )
    })
  }

  render(){
    console.log('postlist', this.props.posts)
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
export default connect(mapStateToProps, null)(PostList)
