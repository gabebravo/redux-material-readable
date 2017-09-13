export const INIT_POSTS = 'INIT_POSTS';
export const INIT_COMMENTS = 'INIT_COMMENTS';

export const initPosts = ( posts ) => ({
  type: INIT_POSTS, 
  posts
})

// removeFromCalendar takes 2 params and returns an object
export const initComments = ( comments ) => ({
  type: INIT_COMMENTS, 
  comments
});