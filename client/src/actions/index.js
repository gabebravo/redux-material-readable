export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export const getPosts = () => ({
  type: GET_POSTS
});

// removeFromCalendar takes 2 params and returns an object
export const getComments = () => ({
  type: GET_COMMENTS
});