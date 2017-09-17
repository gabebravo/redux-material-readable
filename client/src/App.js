import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './containers/MainView'
import CategoryPage from './containers/CategoryView'
import PostPage from './containers/PostView'
import AddPostPage from './containers/FormView'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/categories/:category' component={CategoryPage} />
          <Route path='/post-info/:id' component={PostPage} />
          <Route path='/post-form' component={AddPostPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
