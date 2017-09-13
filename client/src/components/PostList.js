import React from 'react'
import Post from './Post'
import axios from 'axios'
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

const PostList = ({ posts }) => (
  <div>
    {printPosts(posts)}
  </div>
);

export default PostList;