import React, { Component } from 'react'
import Header from '../components/Header'
import { Grid, Row, Cell } from 'react-inline-grid'
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

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Header />
        <h4 style={titleStyles}>Post Info</h4>
        <MainPost />
        <h4 style={titleStyles}>Comments</h4>
        <Grid>
          <Row is="start" className="mainpage-spacing">
            <Cell is="middle 3 tablet-4 phone-4"><div><FilterDropdown /></div></Cell>
            <Cell is="middle 3 tablet-4 phone-4"><div onClick={this.toggle}><AddButton btnText="Add Comment" /></div></Cell>
          </Row>
        </Grid>
        <CommentList />
      <FormModal show={this.state.isOpen} modalHandler={this.toggle} />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default PostView