import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  titleStyles: {
    fontSize: '2.5rem'
  }, 
  subtitleStyle: {
    fontSize: '1.5rem'
  }
}


const Page404 = () => (
  <MuiThemeProvider>
    <Card>
      <CardHeader
        titleStyle={styles.titleStyles}
        title="Page Not Found :("
        subtitleStyle={styles.subtitleStyle}
        subtitle="Maybe the page you are looking for has been removed, or you typed in the wrong URL"
      />
      <CardActions>
        <Link to='/'>
          <RaisedButton label="Return Home" secondary={true} style={{ margin: 12 }} />
        </Link>
      </CardActions>
    </Card>
  </MuiThemeProvider>
);

export default Page404;