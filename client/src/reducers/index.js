// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { INIT_POSTS, GET_POSTS, GET_COMMENTS } from '../actions/index'; // IMPORT THE ACTIONS

const normalizePostArray = (arr) => arr.reduce( (obj, post) => {
  obj[post.id] = post;
  return obj;
}, {});

const posts = (state = {}, action) => {
  switch (action.type) { 
    case INIT_POSTS: 
      return {...state, 
        byId: normalizePostArray(action.posts), 
        allIds: action.posts.map( post => post.id)
      };
    default:
      return state;
  }
}

const comments = (state = [], action) => {

  switch (action.type) { 
    case GET_COMMENTS:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments
});