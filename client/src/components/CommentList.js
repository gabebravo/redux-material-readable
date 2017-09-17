import React from 'react'
import Comment from './Comment'

const printComments = arr => {
  return arr.map( (comment, index) => {
    return (
      <Comment 
        key={index}
        id={comment.id}
        parentId={comment.parentId}
        timestamp={comment.timestamp}
        body={comment.body}
        author={comment.author}
        voteScore={comment.voteScore}
      />
    )
  })
}

const CommentList = ({comments}) => (
  <div>{printComments(comments)}</div>
);

export default CommentList;