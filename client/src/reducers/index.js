// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { SET_POSTS, SET_COMMENTS, SET_CATEGORIES, SET_CATEGORY_POSTS, 
  SET_FILTER_DROPDOWN, INCREMENT_POST_SCORE, DECREMENT_POST_SCORE } from '../actions/index'; // IMPORT THE ACTIONS

const posts = (state = {}, action) => {
  switch (action.type) { 
    case SET_POSTS: 
      return action.posts;
    case INCREMENT_POST_SCORE: {
      console.log('inc')
      return [...state].map( post => {
        if(post.id === action.id){
          post.voteScore++
        } return post;
      });
    }
    case DECREMENT_POST_SCORE: {
      console.log('dec')
      return [...state].map( post => {
        if(post.id === action.id){
          post.voteScore--
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

const categoryPosts = (state = {}, action) => {
  switch (action.type) { 
    case SET_CATEGORY_POSTS: 
      return action.posts;
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
  posts, comments, categories, categoryPosts, filterDropdown
});