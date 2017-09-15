import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import FilterDropdown from '../components/FilterDropdown'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fetchPostsByCategory, fetchComments, sortPostsArray, mapCommentsToArray } from '../utils'
import { setCategoryPosts, setComments, setDropdown } from '../actions'
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
    fetchPostsByCategory(this.props.match.params.category)
      .then( response => {
        const postsArray = sortPostsArray(response.data, 'score');
        this.props.setCategoryPosts(postsArray);
        fetchComments(response.data)
          .then( response => {
            const commentsArray = mapCommentsToArray(response);
            this.props.setComments(commentsArray)
          })
      })
    this.props.setDropdown(1);
  }

  render() {
    const categoryPosts = Array.isArray(this.props.categoryPosts) && Array.isArray(this.props.categoryComments) ?
    <PostList posts={this.props.categoryPosts} comments={this.props.categoryComments} />:
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
          <h3>{categoryPosts}</h3>
        </div>
      </MuiThemeProvider>
    )
  }
}

// <PostList />
const mapStateToProps = (state, ownProps) => ({  
  categoryPosts: state.categoryPosts,
  categoryComments: state.comments,
});
const mapDispatchToProps = dispatch => ({
  setCategoryPosts: categories => dispatch( setCategoryPosts(categories)),
  setComments: commentsArray => dispatch( setComments(commentsArray)),
  setDropdown: numValue => dispatch( setDropdown(numValue)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
