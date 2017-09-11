import React, { Component } from 'react'
import Header from '../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Form from '../components/Form'
import RaisedButton from 'material-ui/RaisedButton'

const styles = { 
  marginTop: '2rem', marginLeft: '1rem', 
  paddingLeft: '44px', paddingRight: '44px', 
  backgroundColor: 'rgb(255, 64, 129)' 
}

export default class FormView extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Form />
          <div>
            <RaisedButton style={styles} label="Submit" secondary={true} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
