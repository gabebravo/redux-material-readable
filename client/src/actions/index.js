export const INIT_POSTS = 'INIT_POSTS';
export const INIT_COMMENTS = 'INIT_COMMENTS';

export const initPosts = ( posts ) => ({
  type: INIT_POSTS, 
  posts
})

export const initComments = ( comments ) => ({
  type: INIT_COMMENTS, 
  comments
});