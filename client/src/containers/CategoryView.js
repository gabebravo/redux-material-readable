import React, { Component } from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class CategoryView extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <PostList />
        </div>
      </MuiThemeProvider>
    )
  }
}
