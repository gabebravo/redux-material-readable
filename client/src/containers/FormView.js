import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
          <PostForm />
          <GenericModal title="Success" text={"You have saved a new post. Hit OK to go back to the homepage."} 
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
