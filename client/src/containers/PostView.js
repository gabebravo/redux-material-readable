import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handlePostScore, setAddCommentModal, resetCommentForm } from '../actions'
import { getCommentsCount } from '../utils'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Post from '../components/Post'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import CommentList from '../components/CommentList'
import FormModal from '../components/FormModal'
import RedirectModal from '../components/RedirectModal'
const moment = require('moment');

const titleStyles = {
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.54)',
  fontSize: '2rem',
  fontWeight: '300', 
  lineHeight: 0, 
  paddingLeft: '20px', 
  width: '100%', 
  fontFamily: 'sans-serif'
}

class PostView extends Component {

  toggleFormModal = () => {
    const modalType = this.props.commentModal.isOpen ? "" : "add";
    this.props.setAddCommentModal(!this.props.commentModal.isOpen, modalType, null);
    this.props.resetCommentForm();
  };

  handleRedirectModal = () => {
    if(window.location.pathname !== "/"){
      this.props.history.push("/");
    }
  }

  convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

  buildMainPost = (posts, id, comments) => {
    const countIds = getCommentsCount(comments);
    const post = [...posts].filter( post => post.id === id )[0]
    return (
      <Post 
        id={post.id}
        title={post.title}
        comments={countIds[post.id] || 0}
        timestamp={this.convertUnixToDate(post.timestamp)}
        author={post.author}
        category={post.category}
        voteScore={post.voteScore}
        body={post.body} // NOTE: true/false below === isIncrementFlag
        incrementScore={() => this.props.handlePostScore(post.id, post.voteScore, true)}
        decrementScore={() => this.props.handlePostScore(post.id, post.voteScore, false)}
        btnArr={true}
      />
    )
  }

  render() {
    const {posts, comments, match } = this.props;
    const mainPost = Array.isArray(this.props.posts) 
      && Array.isArray(this.props.comments) ?
        this.buildMainPost(posts, match.params.id, comments)
      : <Spinner />
    return (
      <MuiThemeProvider>
      <div>
        <Header />
        <h4 style={titleStyles}>Post Info</h4>
        {mainPost}
        <div className="row" style={{ margin: '2rem 0px' }}>
          <div className="col-xs col-sm-2">
            <h4 style={titleStyles}>Comments</h4>
          </div>
          <div className="col-xs-12 col-sm-3">
            <FilterDropdown filterType="comments" />
          </div>
          <div onClick={this.toggleFormModal} className="col-xs-12 col-sm-2" style={{ marginTop: '1.6rem' }}>
            <AddButton btnText="Add Comments"/>
          </div>
        </div>
        {
          Array.isArray(this.props.comments) ?
          <CommentList comments={this.props.comments} id={match.params.id} /> : 
          <Spinner />
        }
      <FormModal parentId={match.params.id} show={this.props.commentModal.isOpen} modalHandler={this.toggleFormModal} />
      <RedirectModal title="Success" text={"You have deleted an old post. Good job. Click OK to be redirected to the homepage."} 
        show={this.props.redirectModal.isOpen} modalHandler={this.handleRedirectModal}
      />
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ posts, comments, commentModal, redirectModal }) => ({ posts, comments, commentModal, redirectModal });
const actions = { handlePostScore, setAddCommentModal, resetCommentForm }
export default withRouter(connect(mapStateToProps, actions)(PostView))