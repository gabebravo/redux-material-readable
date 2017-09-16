import axios from 'axios';

// API 
export const fetchPosts = () => {
  return axios.get('http://localhost:3001/posts', {
    headers: { 'Authorization': 'readable' }
  })
}

export const fetchPostsByCategory = category => {
  return axios.get(`http://localhost:3001/${category}/posts`, {
    headers: { 'Authorization': 'readable' }
  }).catch( response => response.end() )
}

// export const updatePostScore = (id, score) => {
//   return (dispatch) => {
//     axios({
//       method: 'put',
//       url: `http://localhost:3001/posts/${id}`,
//       headers: { 'Authorization': 'readable' },
//       data: {
//         voteScore: (score + 1)
//       }
//     }).then( response => dispatch(incrementPostScore(response.data.voteScore)))
//   }
// }

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

export const fetchCategories = () => {
  return axios.get(`http://localhost:3001/categories`, {
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

export const sortPostsArray = (postsArr, sortType) => {
  const arr = [...postsArr];
  switch(sortType){
    case 'score' : 
      return arr.sort( (a, b) => {
        if ( a.voteScore < b.voteScore ) { return 1 } else if ( a.voteScore > b.voteScore ) { return - 1 } return 0
      });
      break;
    case 'date' :
      return arr.sort( (a, b) => {
        if ( a.timestamp < b.timestamp ) { return 1 } else if ( a.timestamp > b.timestamp ) { return - 1 } return 0
      });
      break;
    default:
  }
}

export const filterPostsByCategory = (postsArr, category) => {
  const arr = [...postsArr];
  return arr.filter( post => post.category ===  category)
}