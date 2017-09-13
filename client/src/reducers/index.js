// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { INIT_POSTS, INIT_COMMENTS } from '../actions/index'; // IMPORT THE ACTIONS

const normalizePostArray = (arr) => arr.reduce( (obj, post) => {
  obj[post.id] = post;
  return obj;
}, {});

const normalizeCommentArray = (arr) => arr.reduce( (obj, comment) => {
  obj[comment.id] = comment;
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

const comments = (state = {}, action) => {
  switch (action.type) { 
    case INIT_COMMENTS:
    return {...state, 
      byId: normalizeCommentArray(action.comments), 
      allIds: action.comments.map( comment => comment.id)
    };
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments
});