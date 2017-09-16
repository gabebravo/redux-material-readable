// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { SET_POSTS, SET_COMMENTS, SET_CATEGORIES, SET_FORM_DATA, ADD_POST,
  SET_FILTER_DROPDOWN, UPDATE_POST_SCORE } from '../actions/index'; // IMPORT THE ACTIONS

const posts = (state = {}, action) => {
  switch (action.type) { 
    case SET_POSTS: 
      return action.posts;
    case ADD_POST: return [...state, action.post];
    case UPDATE_POST_SCORE: {
      return [...state].map( post => {
        if(post.id === action.id){
          post.voteScore = action.newScore
        } return post;
      });
    }
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  switch (action.type) { 
    case SET_COMMENTS: 
      return action.comments;
    default:
      return state;
  }
}

const categories = (state = {}, action) => {
  switch (action.type) { 
    case SET_CATEGORIES: 
      return action.categories;
    default:
      return state;
  }
}

const filterDropdown = (state = 1, action) => {
  switch (action.type) { 
    case SET_FILTER_DROPDOWN: 
      return action.numValue;
    default:
      return state;
  }
}

const formData = (state = { category: 'React' }, action) => {
  const { key, val } = action;
  switch (action.type) { 
    case SET_FORM_DATA: 
      state[key] = val;
    return state;
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments, categories, filterDropdown, formData
});