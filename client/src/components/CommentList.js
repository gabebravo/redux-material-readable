import React from 'react'
import Comment from './Comment'

const printComments = (arr, id) => {
  const filteredComments = arr.filter( comment => comment.parentId === id )
  return filteredComments.map( (comment, index) => {
    if(comment.deleted === true) { return <div key={index}></div>}
    return (
      <Comment 
        key={index}
        id={comment.id}
        timestamp={comment.timestamp}
        body={comment.body}
        author={comment.author}
        voteScore={comment.voteScore}
      />
    )
  })
}

const CommentList = ({ comments, id }) => {
  return <div>{printComments(comments, id)}</div>
}

export default CommentList;