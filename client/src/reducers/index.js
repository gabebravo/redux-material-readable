// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { SET_POSTS, ADD_POST, UPDATE_POST_SCORE, SET_COMMENTS, SET_CATEGORIES, 
   SET_FORM_DATA, SET_FILTER_DROPDOWN, UPDATE_COMMENT_SCORE, SET_ADD_COMMENT_MODAL, 
   RESET_FORM
 } from '../actions' // IMPORT THE ACTIONS

const posts = (state = {}, action) => {
  switch (action.type) { 
    case SET_POSTS: 
      return action.posts;
    case ADD_POST: return action.post;
    case UPDATE_POST_SCORE: {
      return [...state].map( post => {
        if(post.id === action.id){
          let copy = Object.assign({}, post);
          copy.voteScore = action.newScore;
          return copy;
        } else { return post };
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
    case UPDATE_COMMENT_SCORE: {
      return [...state].map( comment => {
        if(comment.id === action.id){
          let copy = Object.assign({}, comment);
          copy.voteScore = action.newScore;
          return copy;
        } else { return comment };
      })
    }
    default:
      return state;
  }
}

const categories = (state = [], action) => {
  switch (action.type) { 
    case SET_CATEGORIES: 
      return action.categories;
    default:
      return state;
  }
}

const filterDropdown = (state = { numValue: 1}, action) => {
  switch (action.type) { 
    case SET_FILTER_DROPDOWN: 
    return Object.assign({}, state, {
      numValue: action.numValue
    }) 
    default:
      return state;
  }
}

const commentModal = (state = { isOpen: false}, action) => {
  switch (action.type) { 
    case SET_ADD_COMMENT_MODAL:
      return Object.assign({}, state, {
        isOpen: action.isOpen
      }) 
    default:
      return state;
  }
}

const formData = (state = {}, action) => {
  const { key, val, obj } = action;
  switch (action.type) { 
    case SET_FORM_DATA: 
    return Object.assign({}, state, {
      [`${key}`]: val
    })
    case RESET_FORM :
    return Object.assign({}, {}, {})
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments, categories, filterDropdown, formData, commentModal
});