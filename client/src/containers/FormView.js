import React, { Component } from 'react'
import Header from '../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Form from '../components/Form'

export default class FormView extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Form />
        </div>
      </MuiThemeProvider>
    )
  }
}
