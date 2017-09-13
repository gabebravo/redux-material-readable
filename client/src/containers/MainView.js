import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Cell } from 'react-inline-grid' 
import { initPosts } from '../actions'
import { fetchPosts } from '../utils'
import Header from '../components/Header'
import ButtonRow from '../components/ButtonRow'
import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
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
      .then( response => this.props.loadPosts(response.data))
      .catch( response => console.log(response));
  }

  getPostsAsArray = (arr, obj) => {
    return arr.map( id => {
      return obj[id];
    })
  }

  render() {
    const {posts} = this.props.post;
    const postsArr = Array.isArray(posts.allIds) ?
      <PostList posts={this.getPostsAsArray(posts.allIds, posts.byId)} />:
      <Spinner />;
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
        {postsArr}
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = post => ({ post });
const mapDispatchToProps = dispatch => ({
    loadPosts: post => dispatch( initPosts(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
