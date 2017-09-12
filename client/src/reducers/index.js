// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { GET_POSTS, GET_COMMENTS } from '../actions/index'; // IMPORT THE ACTIONS

const postData = {
  "5b3a77e65e834294917c5ca6ada9d0db": {
    id: '5b3a77e65e834294917c5ca6ada9d0db',
    timestamp: 1467166872634,
    title: 'Learning React is a great skill in 2017',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false 
  },
  "95b9bdbfe2504887aa8e9b407a766513": {
    id: '95b9bdbfe2504887aa8e9b407a766513',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: 3,
    deleted: false
  }, 
  "d14e77f3203745cc9ad08e2eba433fad": {
    id: 'd14e77f3203745cc9ad08e2eba433fad',
    timestamp: 1468479767190,
    title: 'Javascript Frameworks Chaos',
    body: 'Angular, React, Vue, Ember, and more.',
    author: 'thingthree',
    category: 'javascript',
    voteScore: 1,
    deleted: false
  }
}

const commentData = {
  "04db69a9efec47999f69ebd3796fa75d": {
    id: '04db69a9efec47999f69ebd3796fa75d',
    parentId: "5b3a77e65e834294917c5ca6ada9d0db",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false 
  },
  "1ec22c59b2924f09b72de634cf87c347": {
    id: '95b9bdbfe2504887aa8e9b407a766513',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
}

const categoriesData = {
  categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'javascript',
        path: 'javascript'
      }
  ]
}

const post = (state = postData, action) => {

  switch (action.type) { 
    case GET_POSTS:
      return state;
    default:
      return state;
  }
}

const comment = (state = commentData, action) => {

  switch (action.type) { 
    case GET_COMMENTS:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  post, comment
});