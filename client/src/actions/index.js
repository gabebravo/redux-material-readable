// POST ACTIONS & ACTION CREATORS
export const SET_POSTS = 'SET_POSTS';
export const setPosts = posts => ({
  type: SET_POSTS, 
  posts
})

export const INCREMENT_POST_SCORE = 'INCREMENT_POST_SCORE';
export const incrementPostScore = id => ({
  type: INCREMENT_POST_SCORE, 
  id
})

export const DECREMENT_POST_SCORE = 'DECREMENT_POST_SCORE';
export const decrementPostScore = id => ({
  type: DECREMENT_POST_SCORE, 
  id
})

// COMMENT ACTIONS & ACTION CREATORS
export const SET_COMMENTS = 'SET_COMMENTS';
export const setComments = comments => ({
  type: SET_COMMENTS, 
  comments
});

// RANDOM UI COMPONENT STATE ACTIONS & ACTION CREATORS
export const SET_FILTER_DROPDOWN = 'SET_FILTER_DROPDOWN';
export const setDropdown = numValue => ({
  type: SET_FILTER_DROPDOWN, 
  numValue
});
