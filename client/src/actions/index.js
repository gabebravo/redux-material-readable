import axios from 'axios'

// POST ACTIONS & ACTION CREATORS
export const SET_POSTS = 'SET_POSTS';
export const setPosts = posts => ({
  type: SET_POSTS, 
  posts
})

export const ADD_POST = 'ADD_POST';
export const addPost = post => {
  return ({
    type: ADD_POST, 
    post
  })
}

export const handleAddingPost = (postBody) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `http://localhost:3001/posts`,
      headers: { 'Authorization': 'readable' },
      data: postBody
    }).then( response => dispatch(addPost(response.data)))
    .catch( response => console.log(response.error))
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
      url: `http://localhost:3001/posts/${id}`,
      headers: { 'Authorization': 'readable' },
      data: isIncFlag ? { voteScore: (score + 1) } : { voteScore: (score - 1) }
    }).then( response => dispatch(updatePostScore(id, response.data.voteScore)))
  }
}

// COMMENT ACTIONS & ACTION CREATORS
export const SET_COMMENTS = 'SET_COMMENTS';
export const setComments = comments => ({
  type: SET_COMMENTS, 
  comments
});

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
