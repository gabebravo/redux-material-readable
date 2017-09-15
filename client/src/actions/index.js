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

export const UPDATE_POST_SCORE = 'UPDATE_POST_SCORE';
export const updatePostScore = (id, score) => ({
  type: UPDATE_POST_SCORE, 
  id, score
})

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

export const SET_CATEGORY_POSTS = 'SET_CATEGORY_POSTS';
export const setCategoryPosts = posts => ({
  type: SET_CATEGORY_POSTS, 
  posts
})

export const SET_CATEGORY_COMMENTS = 'SET_CATEGORY_COMMENTS';
export const setCategoryComments = comments => ({
  type: SET_CATEGORY_COMMENTS, 
  comments
})

// RANDOM UI COMPONENT STATE ACTIONS & ACTION CREATORS
export const SET_FILTER_DROPDOWN = 'SET_FILTER_DROPDOWN';
export const setDropdown = numValue => ({
  type: SET_FILTER_DROPDOWN, 
  numValue
});
