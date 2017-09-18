import React, { Component } from 'react'
import Header from '../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostForm from '../components/PostForm'

export default class FormView extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <PostForm />
        </div>
      </MuiThemeProvider>
    )
  }
}
