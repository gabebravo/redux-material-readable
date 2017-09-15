// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { SET_POSTS, SET_COMMENTS, SET_FILTER_DROPDOWN } from '../actions/index'; // IMPORT THE ACTIONS

const posts = (state = {}, action) => {
  switch (action.type) { 
    case SET_POSTS: 
      return action.posts;
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

const filterDropdown = (state = {}, action) => {
  switch (action.type) { 
    case SET_FILTER_DROPDOWN: 
      return action.numValue;
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments, filterDropdown
});