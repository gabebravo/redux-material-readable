import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../utils'
import { setGenericModal, setFormData } from '../actions'

import Header from '../components/Header'
import PostForm from '../components/PostForm'
import GenericModal from '../components/GenericModal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class EditFormView extends Component {

  toggle = () => {
    this.props.setGenericModal( this.props.genericModal.isOpen )
  };

  componentDidMount(){
    fetchPostById(this.props.match.params.id)
      .then( response => {
        this.props.setFormData('id', response.data.id);
        this.props.setFormData('timestamp', response.data.timestamp);
        this.props.setFormData('voteScore', response.data.voteScore);
        this.props.setFormData('title', response.data.title)
        this.props.setFormData('body', response.data.body)
        this.props.setFormData('author', response.data.author)
        this.props.setFormData('category', response.data.category)
      })
  }

  render() { 
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <PostForm type="edit" />
          <GenericModal title="Success" text={"You have saved a new post. Good job. It will now appear on the homepage."} 
            show={this.props.genericModal.isOpen || false} modalHandler={this.toggle}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ formData, genericModal }) => ({ formData, genericModal })
const actions = { setGenericModal, setFormData }
export default connect(mapStateToProps, actions)(EditFormView)
