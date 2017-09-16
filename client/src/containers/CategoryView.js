import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import PostList from '../components/PostList'
import FilterDropdown from '../components/FilterDropdown'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { sortPostsArray, filterPostsByCategory } from '../utils'
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

  render() {
    const { posts, comments } = this.props;
    const { category } = this.props.match.params;
    const postsByCategory = filterPostsByCategory(posts, category);

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
          <PostList posts={postsByCategory} comments={comments} />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ posts, comments }) => ({ posts, comments });
export default connect(mapStateToProps, null)(CategoryView)
