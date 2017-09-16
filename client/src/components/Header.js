import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Header = () => (
  <MuiThemeProvider>
    <AppBar
      title="Readable App"
      iconElementLeft={
        <Link to={`/`}> 
          <IconButton><ActionHome color='#fff' /></IconButton>
        </Link>
      }
    />
  </MuiThemeProvider>
);

export default Header;