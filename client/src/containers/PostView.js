import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleMainPost } from '../actions'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import MainPost from '../components/MainPost'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import CommentList from '../components/CommentList'
import FormModal from '../components/FormModal'

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

  componentWillMount(){
    this.props.handleMainPost(this.props.match.params.id)
  }

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen });
  };

  render() {
    const mainPost = typeof this.props.mainPost.post === 'object' 
      && Array.isArray(this.props.mainPost.comments) ? 
      <MainPost postData={this.props.mainPost.post} />
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
            <FilterDropdown />
          </div>
          <div className="col-xs-12 col-sm-2" style={{ marginTop: '1.6rem' }}>
            <Link to={`/post-form`}><AddButton btnText="Add Comments"/></Link>
          </div>
        </div>
        {
          Array.isArray(this.props.mainPost.comments) ?
          <CommentList comments={this.props.mainPost.comments} /> : 
          <Spinner />
        }
      <FormModal show={this.state.isOpen} modalHandler={this.toggle} />
      </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ posts, comments, mainPost }) => ({ posts, comments, mainPost });
const actions = { handleMainPost }
export default connect(mapStateToProps, actions)(PostView)