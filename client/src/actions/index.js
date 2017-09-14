export const INIT_POSTS = 'INIT_POSTS';
export const INIT_COMMENTS = 'INIT_COMMENTS';

export const initPosts = ({ allIds, byId }) => ({
  type: INIT_POSTS, 
  allIds, 
  byId
})

export const initComments = ({ allIds, byId }) => ({
  type: INIT_COMMENTS, 
  allIds, 
  byId
});