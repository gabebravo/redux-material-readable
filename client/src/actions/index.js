import axios from 'axios'

// POST ACTIONS & ACTION CREATORS
export const SET_POSTS = 'SET_POSTS';
export const setPosts = posts => ({
  type: SET_POSTS, 
  posts
})

export const SET_EDIT_POST = 'SET_EDIT_POST';
export const setEditPost = post => ({
  type: SET_EDIT_POST, post
})

export const ADD_POST = 'ADD_POST';
export const addPost = post => {
  return ({
    type: ADD_POST, 
    post
  })
}

export const handleAddingPost = postBody => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `https://redux-readable-app.herokuapp.com/posts`,
      headers: { 'Authorization': 'readable' },
      data: postBody
    }).then( response => dispatch(addPost(response.data)))
    .catch( response => console.log(response.error))
  }
}

export const UPDATE_POST_DATA = 'UPDATE_POST_DATA'
export const updatePostData = updatedPost => {
  return ({
    type: UPDATE_POST_DATA,
    updatedPost
  })
}

export const handleUpdatingPost = postBody => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `https://redux-readable-app.herokuapp.com/posts/${postBody.id}`,
      headers: { 'Authorization': 'readable' },
      data: postBody
    }).then( response => dispatch(updatePostData(response.data)))
  }
}

export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE';
export const updatePostScore = (id, newScore) => {
  return ({
    type: UPDATE_POST_SCORE,
    id, 
    newScore
  })
}

export const handlePostScore = (id, score, isIncFlag) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `https://redux-readable-app.herokuapp.com/posts/${id}`,
      headers: { 'Authorization': 'readable' },
      data: isIncFlag ? { voteScore: (score + 1) } : { voteScore: (score - 1) }
    }).then( response => dispatch(updatePostScore(id, response.data.voteScore)))
  }
}

export const SET_REDIRECT_MODAL = 'SET_REDIRECT_MODAL';
export const setRedirectModal = isOpen => ({
  type: SET_REDIRECT_MODAL, isOpen
})

export const deletePost = (id, isOpen) => {
  return (dispatch) => {
    axios.delete(`https://redux-readable-app.herokuapp.com/posts/${id}`, {
      headers: { 'Authorization': 'readable' }
    }).then( response => dispatch(setRedirectModal(isOpen)))
  }
}

// COMMENT ACTIONS & ACTION CREATORS
export const SET_COMMENTS = 'SET_COMMENTS';
export const setComments = comments => ({
  type: SET_COMMENTS, 
  comments
});

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = newComment => {
  return ({
    type: ADD_COMMENT, 
    newComment
  });
}

export const handleAddingComment = postBody => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `https://redux-readable-app.herokuapp.com/comments`,
      headers: { 'Authorization': 'readable' },
      data: postBody
    }).then( response => dispatch(addComment(response.data)))
    .catch( response => console.log(response.error))
  }
}

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = deletedComment => {
  return ({
    type: DELETE_COMMENT, deletedComment
  })
}

export const handleCommentDelete = id => {
  return (dispatch) => {
    axios.delete(`https://redux-readable-app.herokuapp.com/comments/${id}`, {
      headers: { 'Authorization': 'readable' }
    }).then( response => dispatch(deleteComment(response.data)))
    .catch( response => console.log(response.error))
  }
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment = updatedComment => {
  return ({
    type: UPDATE_COMMENT,
    updatedComment
  })
}

export const handleUpdatingComment = postBody => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `https://redux-readable-app.herokuapp.com/comments/${postBody.id}`,
      headers: { 'Authorization': 'readable' },
      data: postBody
    }).then( response => dispatch(updateComment(response.data)))
    .catch( response => console.log(response.error))
  }
}

export const UPDATE_COMMENT_SCORE = 'UPDATE_COMMENT_SCORE';
export const updateCommentScore = (id, newScore) => {
  return ({
    type: UPDATE_COMMENT_SCORE,
    id, newScore
  })
}

export const handleCommentScore = (id, score, isIncFlag) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: `https://redux-readable-app.herokuapp.com/comments/${id}`,
      headers: { 'Authorization': 'readable' },
      data: isIncFlag ? { voteScore: (score + 1) } : { voteScore: (score - 1) }
    }).then( response => dispatch(updateCommentScore(id, response.data.voteScore)))
  }
}

// CATEGORIES ACTIONS & ACTION CREATORS
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = categories => ({
  type: SET_CATEGORIES, 
  categories
});

// RANDOM UI COMPONENT STATE ACTIONS & ACTION CREATORS
export const SET_FILTER_DROPDOWN = 'SET_FILTER_DROPDOWN';
export const setFilterDropdown = numValue => ({
  type: SET_FILTER_DROPDOWN, 
  numValue
});

export const SET_FORM_DATA = 'SET_FORM_DATA';
export const setFormData = (key, val) => ({
  type: SET_FORM_DATA, 
  key, val
});

export const RESET_FORM = 'RESET_FORM';
export const resetFormData = () => ({
  type: RESET_FORM
})

export const SET_COMMENT_FORM = 'SET_COMMENT_FORM';
export const setCommentForm = dataObj => {
  return {
    type: SET_COMMENT_FORM,
    dataObj
  }
}

export const RESET_COMMENT_FORM = 'RESET_COMMENT_FORM';
export const resetCommentForm = () => ({
  type: RESET_COMMENT_FORM
})

export const SET_ADD_COMMENT_MODAL = 'SET_ADD_COMMENT_MODAL';
export const setAddCommentModal = (isOpen, formType, commentId) => ({
  type: SET_ADD_COMMENT_MODAL, isOpen, formType, commentId
})

export const SET_GENERIC_MODAL = 'SET_GENERIC_MODAL';
export const setGenericModal = (isOpen, hasError) => ({
  type: SET_GENERIC_MODAL, isOpen, hasError
})
