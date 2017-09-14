// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { INIT_POSTS, INIT_COMMENTS } from '../actions/index'; // IMPORT THE ACTIONS

const posts = (state = {}, action) => {
  const { byId, allIds } = action;
  switch (action.type) { 
    case INIT_POSTS: 
      return {...state, 
        byId, 
        allIds,
      };
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const { byId, allIds } = action;
  switch (action.type) { 
    case INIT_COMMENTS:
    return {...state, 
      byId, 
      allIds,
    };
    default:
      return state;
  }
}

export default combineReducers({
  posts, comments
});