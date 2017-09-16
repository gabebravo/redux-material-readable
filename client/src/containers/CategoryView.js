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
    console.log(this.props.location.state.posts)
    console.log(this.props.location.state.comments)
    // fetchPostsByCategory(this.props.match.params.category)
    //   .then( response => {
    //     const postsArray = sortPostsArray(response.data, 'score');
    //     this.props.setCategoryPosts(postsArray);
    //     fetchComments(response.data)
    //       .then( response => {
    //         const commentsArray = mapCommentsToArray(response);
    //         this.props.setComments(commentsArray)
    //       })
    //   })
    // this.props.setDropdown(1);
  }

  render() {
    const {posts, comments} = this.props.location.state;
    const categoryPosts = Array.isArray(posts) && Array.isArray(comments) ?
    <PostList posts={posts} comments={comments} />:
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
          {categoryPosts}
        </div>
      </MuiThemeProvider>
    )
  }
}

// <PostList />
// const mapStateToProps = (state, ownProps) => ({  
//   categoryPosts: state.categoryPosts,
//   categoryComments: state.comments,
// });
// const mapDispatchToProps = dispatch => ({
//   setCategoryPosts: categories => dispatch( setCategoryPosts(categories)),
//   setComments: commentsArray => dispatch( setComments(commentsArray)),
//   setDropdown: numValue => dispatch( setDropdown(numValue)), 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)

export default CategoryView
