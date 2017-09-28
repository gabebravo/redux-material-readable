import axios from 'axios';

// API 
export const fetchPosts = () => {
  return axios.get('https://redux-readable-app.herokuapp.com/posts', {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchPostById = id => {
  return axios.get(`https://redux-readable-app.herokuapp.com/posts/${id}`, {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchPostsByCategory = category => {
  return axios.get(`https://redux-readable-app.herokuapp.com/${category}/posts`, {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchComment = id => {
  return axios.get(`https://redux-readable-app.herokuapp.com/${id}/comments`, {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchComments = arr => {
  return axios.all(arr.map( post => {
    return fetchComment(post.id) 
  }))
  .then( result => result)
}

export const fetchCategories = () => {
  return axios.get(`https://redux-readable-app.herokuapp.com/categories`, {
    headers: { 'Authorization': 'readable' }
  })
}
// HELPERS
export const mapCommentsToArray = arr => {
  const filteredComments = arr.filter(comment => comment.data.length > 0)
  const mappedComments = [];
  filteredComments.forEach( comment => {
    mappedComments.push(...comment.data)
  });
  return mappedComments;
}

export const getCommentsCount = commentsArray => {
  return commentsArray.map( comment => comment.parentId )
  .reduce( (obj, val) => {
    if ( val in obj ) { obj[val]++ } else { obj[val] = 1 } return obj
  }, {});
}

export const sortArray = (postsArr, sortType) => {
  const arr = [...postsArr];
  switch(sortType){
    case 'score' : 
      return arr.sort( (a, b) => {
        if ( a.voteScore < b.voteScore ) { return 1 } else if ( a.voteScore > b.voteScore ) { return - 1 } return 0
      });
    case 'date' :
      return arr.sort( (a, b) => {
        if ( a.timestamp < b.timestamp ) { return 1 } else if ( a.timestamp > b.timestamp ) { return - 1 } return 0
      });
    default:
  }
}

export const filterPostsByCategory = (postsArr, category) => {
  const arr = [...postsArr];
  return arr.filter( post => post.category ===  category)
}