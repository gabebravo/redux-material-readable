import axios from 'axios';

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