import React, { Component } from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import Header from '../components/Header'
import ButtonRow from '../components/ButtonRow'

import FilterDropdown from '../components/FilterDropdown'
import AddButton from '../components/AddButton'
import PostList from '../components/PostList'
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

export default class MainView extends Component {
  render() {
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
        <PostList/>
      </div>
      </MuiThemeProvider>
    )
  }
}
