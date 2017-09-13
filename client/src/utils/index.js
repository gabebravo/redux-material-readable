import axios from 'axios';

// API 
export const fetchPosts = () => {
  return axios.get('http://localhost:3001/posts', {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchComment = id => {
  return axios.get(`http://localhost:3001/posts/${id}/comments`, {
    headers: { 'Authorization': 'readable' }
  }).catch( response => response.end() )
}

export const fetchComments = arr => {
  return axios.all(arr.map( post => {
    return fetchComment(post.id) 
  }))
  .then( result => result)
}

// .then(axios.spread( (acct, perms) => {
  //   const result = [...acct.data, ...perms.data];
  //   return result;
  // }));

// HELPERS 
export const getPostsAsArray = (arr, obj) => {
  return arr.map( id => {
    return obj[id];
  })
}

export const getCommentsAsArray = (arr, obj) => {
  return arr.map( id => {
    return obj[id];
  })
}

// need to pass in the obj & the array
// and need to reduce based on the parentId
export const reduceNumOfComments = arr => {
  return arr.reduce( (obj, comment) => {
    if( comment in obj ){
      obj[comment] ++;
    } else {
      obj[comment] = 1;
    }
    return obj; // need a helper function that already has all the comments in an array
  }, {})
}