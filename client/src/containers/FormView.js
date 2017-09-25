import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setGenericModal } from '../actions'

import Header from '../components/Header'
import PostForm from '../components/PostForm'
import GenericModal from '../components/GenericModal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class FormView extends Component {

  toggle = () => {
    this.props.setGenericModal( this.props.genericModal.isOpen, false )
  };

  render() {
    const genericModal = this.props.genericModal.hasError ?
      <GenericModal title="Error" text={"Incomplete fields. Please make sure no fields are blank and re-submit."} 
        show={this.props.genericModal.isOpen || false} modalHandler={this.toggle}
      /> :
      <GenericModal title="Success" text={"You have saved a new post. Good job. It will now appear on the homepage."} 
        show={this.props.genericModal.isOpen || false} modalHandler={this.toggle}
      />
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <PostForm type="add" />
          {genericModal}
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapPropsToState = ({ genericModal, formData }) => ({ genericModal, formData })
const actions = { setGenericModal }
export default connect(mapPropsToState, actions)(FormView)
