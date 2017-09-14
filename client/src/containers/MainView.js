import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Cell } from 'react-inline-grid' 
import { initPosts, initComments } from '../actions'
import { fetchPosts, fetchComments, normalizeArray, getPostsAsArray } from '../utils'
import Header from '../components/Header'
import ButtonRow from '../components/ButtonRow'
import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import PostList from '../components/PostList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
        const allIds = response.data.map(post => post.id);
        const byId = normalizeArray(response.data);
        this.props.loadPosts({ byId, allIds });

        const postData = getPostsAsArray(allIds, byId);
        fetchComments(postData)
          .then( result => {
            const filteredComments = result.filter(comment => comment.data.length > 0)
            const mappedComments = [];
            filteredComments.forEach( comment => {
              mappedComments.push(...comment.data)
            })
            const allIds = mappedComments.map(post => post.id);
            const byId = normalizeArray(mappedComments);
            this.props.loadComments({ byId, allIds })
          })
      })
  }

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Header />
        <ButtonRow title="Category Pages: " btn1="React" btn2="Redux" btn3="Javascript" btn4="Udactiy"/>
        <Grid>
          <Row is="start" className="mainpage-spacing">
            <Cell is="middle 2 tablet-4 phone-4"><h4 style={titleStyles}>Posts</h4></Cell>
            <Cell is="middle 3 tablet-4 phone-4"><div><FilterDropdown /></div></Cell>
            <Cell is="middle 3 tablet-4 phone-4"><div><AddButton btnText="Add Post" /></div></Cell>
          </Row>
        </Grid>
        <PostList />
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (post, comment) => ({ post, comment });
const mapDispatchToProps = dispatch => ({
    loadPosts: postData => dispatch( initPosts(postData)),
    loadComments: commentData => dispatch( initComments(commentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
