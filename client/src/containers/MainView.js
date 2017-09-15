import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPosts, setComments, setDropdown } from '../actions'
import { fetchPosts, fetchComments, mapCommentsToArray, sortPostsArray } from '../utils'
import Header from '../components/Header'
import ButtonRow from '../components/ButtonRow'
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
    fetchPosts()
      .then( response => {
        return response
      })
      .then( response => {
        const postsArray = sortPostsArray(response.data, 'score');
        this.props.setPosts(postsArray);
        fetchComments(response.data)
          .then( result => {
            const commentsArray = mapCommentsToArray(result);
            this.props.setComments(commentsArray)
          })
      })
      this.props.setDropdown(1);
  }

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Header />
        <ButtonRow title="Category Pages: " btn1="React" btn2="Redux" btn3="Javascript" btn4="Udactiy"/>
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
       <PostList />
      </div>
      </MuiThemeProvider>
    )
  }
}

// const mapStateToProps = ({ posts, comments, filterDropdown }) => ({ posts, comments, filterDropdown });
const mapDispatchToProps = dispatch => ({
    setPosts: postsArray => dispatch( setPosts(postsArray)),
    setComments: commentsArray => dispatch( setComments(commentsArray)),
    setDropdown: numValue => dispatch( setDropdown(numValue)),
});

export default connect(null, mapDispatchToProps)(MainView)
