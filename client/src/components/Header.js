import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
// import FlatButton from 'material-ui/FlatButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = () => (
  <MuiThemeProvider>
    <AppBar
      title="Readable App"
      iconElementLeft={<IconButton href='/'><ActionHome /></IconButton>}
      // iconElementRight={<FlatButton label="Add Post" href='/add-post' />}
    />
  </MuiThemeProvider>
);

export default Header;