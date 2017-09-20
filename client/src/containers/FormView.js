import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setGenericModal } from '../actions'

import Header from '../components/Header'
import PostForm from '../components/PostForm'
import GenericModal from '../components/GenericModal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class FormView extends Component {

  toggle = () => {
    this.props.setGenericModal( this.props.genericModal.isOpen )
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <PostForm type="add" />
          <GenericModal title="Success" text={"You have saved a new post. Good job. It will now appear on the homepage."} 
            show={this.props.genericModal.isOpen || false} modalHandler={this.toggle}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapPropsToState = ({ genericModal }) => ({ genericModal })
const actions = { setGenericModal }
export default connect(mapPropsToState, actions)(FormView)
