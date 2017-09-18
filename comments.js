const clone = require('clone')

let db = {}

const defaultData = {
  "04db69a9efec47999f69ebd3796fa75d": {
    id: '04db69a9efec47999f69ebd3796fa75d',
    parentId: "5b3a77e65e834294917c5ca6ada9d0db",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false 
  },
  "1ec22c59b2924f09b72de634cf87c347": {
    id: '1ec22c59b2924f09b72de634cf87c347',
    parentId: "d14e77f3203745cc9ad08e2eba433fad",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'Jim',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  },
  "a9b31c4a9c1611e7abc4cec278b6b50a": {
    id: 'a9b31c4a9c1611e7abc4cec278b6b50a',
    parentId: "95b9bdbfe2504887aa8e9b407a766513",
    timestamp: 1468166872634,
    body: 'Redux is the best.',
    author: 'Lenny',
    voteScore: 6,
    deleted: false,
    parentDeleted: false 
  },
  "a9b3200a9c1611e7abc4cec278b6b50a": {
    id: 'a9b3200a9c1611e7abc4cec278b6b50a',
    parentId: "95b9bdbfe2504887aa8e9b407a766513",
    timestamp: 1469479767190,
    body: 'I still love redux',
    author: 'thingone',
    voteScore: 5,
    deleted: false,
    parentDeleted: false
  },
  "a9b322a89c1611e7abc4cec278b6b50a": {
    id: 'a9b322a89c1611e7abc4cec278b6b50a',
    parentId: "d14e77f3203745cc9ad08e2eba433fad",
    timestamp: 1469479767190,
    body: 'I am all about leaving JS comments',
    author: 'Tom',
    voteScore: 2,
    deleted: false,
    parentDeleted: false
  },
  "a9b325149c1611e7abc4cec278b6b50a": {
    id: 'a9b325149c1611e7abc4cec278b6b50a',
    parentId: "5b3a77e65e834294917c5ca6ada9d0db",
    timestamp: 1468166872634,
    body: 'Seriously, react all the way!',
    author: 'Sam',
    voteScore: 3,
    deleted: false,
    parentDeleted: false 
  },
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent (token, parentId) {
  return new Promise((res) => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === parentId && !comments[key].deleted)
    res(filtered_keys.map(key => comments[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const comments = getData(token)
    res(
      comments[id].deleted || comments[id].parentDeleted
        ? {}
        : comments[id]      
      )
  })
}

function add (token, comment) {
  return new Promise((res) => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }
     
    res(comments[comment.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let comments = getData(token)
    comment = comments[id]
    switch(option) {
        case "upVote":
            comment.voteScore = comment.voteScore + 1
            break
        case "downVote":
            comment.voteScore = comment.voteScore - 1
            break
        default:
            console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent (token, post) {
    return new Promise((res) => {
        let comments = getData(token)
        keys = Object.keys(comments)
        filtered_keys = keys.filter(key => comments[key].parentId === post.id)
        filtered_keys.forEach(key => comments[key].parentDeleted = true)
        res(post)
    })
}

function disable (token, id) {
    return new Promise((res) => {
      let comments = getData(token)
      comments[id].deleted = true
      res(comments[id])
    })
}

function edit (token, id, comment) {
    return new Promise((res) => {
        let comments = getData(token)
        for (prop in comment) {
            comments[id][prop] = comment[prop]
        }
        res(comments[id])
    })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}