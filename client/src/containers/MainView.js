import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPosts, setComments, setCategories, setDropdown } from '../actions'
import { fetchPosts, fetchComments, fetchCategories, 
  mapCommentsToArray, sortPostsArray } from '../utils'
import Header from '../components/Header'
import ButtonRow from '../components/ButtonRow'
import Spinner from '../components/Spinner'
import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import PostList from '../components/PostList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
require('flexboxgrid')

// const uuidv4 = require('uuid/v4');
// console.log(uuidv4().split('-').join(''))

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

class MainView extends Component {

  componentDidMount() {
    fetchCategories()
      .then( response => {
        return response
      })
      .then( response => {
        const categoriesArray = response.data.categories.map(category => category.name)
        this.props.setCategories(categoriesArray)
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
      })
      this.props.setDropdown(1);
  }

  render() {
    let postList, buttonRow = <Spinner />;
    if( Array.isArray(this.props.posts) && Array.isArray(this.props.comments) && Array.isArray(this.props.categories) ) {
      postList = <PostList posts={this.props.posts} comments={this.props.comments} />
      buttonRow = <ButtonRow title="Category Pages: " categories={this.props.categories} />
    }
    return (
    <MuiThemeProvider>
      <div>
        <Header />
        {buttonRow}
        <div className="row" style={{ marginBottom: '1.7rem' }}>
          <div className="col-xs col-sm-2">
            <h4 style={titleStyles}>Posts</h4>
          </div>
          <div className="col-xs-12 col-sm-3">
            <FilterDropdown />
          </div>
          <div className="col-xs-12 col-sm-2" style={{ marginTop: '1.6rem' }}>
            <AddButton btnText="Add Post"/>
          </div>
        </div>
       {postList}
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ posts, comments, categories }) => ({ posts, comments, categories });
const mapDispatchToProps = dispatch => ({
    setPosts: postsArray => dispatch( setPosts(postsArray)),
    setComments: commentsArray => dispatch( setComments(commentsArray)),
    setCategories: categoriesArray => dispatch( setCategories(categoriesArray)),
    setDropdown: numValue => dispatch( setDropdown(numValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView)

// const actions = {setPosts, setComments, setDropdown};
// export default connect(null, actions )(MainView)
