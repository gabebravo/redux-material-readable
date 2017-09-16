import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPosts, setComments, setDropdown } from '../actions'
import { fetchPosts, fetchComments, sortPostsArray, mapCommentsToArray } from '../utils'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import FilterDropdown from '../components/FilterDropdown'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
require('flexboxgrid')

const titleStyles = {
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.54)',
  fontSize: '2rem',
  fontWeight: '300', 
  lineHeight: 0, 
  paddingLeft: '15px', 
  width: '100%', 
  fontFamily: 'sans-serif'
}

class CategoryView extends Component {

  componentDidMount() {
    fetchPosts()
      .then( response => {
        return response
      })
      .then( response => {
        const postsArray = sortPostsArray(response.data, 'score');
        this.props.setPosts(postsArray);
        fetchComments(response.data)
          .then( response => {
            const commentsArray = mapCommentsToArray(response);
            this.props.setComments(commentsArray)
          })
      })
    this.props.setDropdown(1);
  }

  filterPostsToCategory = (arr, category) => {
    return arr.filter( post => post.category === category )
  }

  render() {
    const postList = Array.isArray(this.props.posts) && Array.isArray(this.props.comments) ?
    <PostList 
      posts={this.filterPostsToCategory([...this.props.posts], this.props.match.params.category)} 
      comments={this.props.comments} />:
    <Spinner />
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div className="row" style={{ marginBottom: '1.7rem' }}>
            <div className="col-xs col-sm-2">
              <h4 style={titleStyles}>Posts</h4>
            </div>
            <div className="col-xs-12 col-sm-3">
              <FilterDropdown />
            </div>
          </div>
          {postList}
        </div>
      </MuiThemeProvider>
    )
  }
}

// <PostList />
const mapStateToProps = ({ posts, comments }) => ({ posts, comments });
const mapDispatchToProps = dispatch => ({
  setPosts: postsArray => dispatch( setPosts(postsArray)),
  setComments: commentsArray => dispatch( setComments(commentsArray)),
  setDropdown: numValue => dispatch( setDropdown(numValue)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)

// export default CategoryView
