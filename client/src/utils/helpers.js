export const getPostsAsArray = (arr, obj) => {
  return arr.map( id => {
    return obj[id];
  })
}