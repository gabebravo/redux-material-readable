export const INIT_POSTS = 'INIT_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export const initPosts = ( posts ) => ({
  type: INIT_POSTS, 
  posts
})

// removeFromCalendar takes 2 params and returns an object
export const getComments = () => ({
  type: GET_COMMENTS
});