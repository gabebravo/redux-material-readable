import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Header = () => (
  <MuiThemeProvider>
    <AppBar
      title="Readable App"
      iconElementLeft={<IconButton href='/'><ActionHome /></IconButton>}
    />
  </MuiThemeProvider>
);

export default Header;