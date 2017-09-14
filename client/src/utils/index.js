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

// HELPERS
export const normalizeArray = arr => arr.reduce( (obj, val) => {
  obj[val.id] = val;
  return obj;
}, {});

export const getPostsAsArray = (arr, obj) => {
  return arr.map( id => {
    return obj[id];
  })
}