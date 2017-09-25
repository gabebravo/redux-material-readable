// companyBaseTheme.js
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import merge from 'lodash.merge';
const colors = require('material-ui/styles/colors');

// https://cimdalli.github.io/mui-theme-generator/
const muiTheme = {
  palette: {
    "primary1Color": "#2196f3",
    "accent1Color": "#ffab40",
  },
};

const theme = merge(lightBaseTheme, muiTheme)
export default theme;

/* NOTES : In app.js import these packages >>

  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import customTheme from './utils/customTheme';

THEN : all you have to do is wrap the router like this >>

  <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/categories/:category' component={CategoryPage} />
        <Route path='/post-info/:id' component={PostPage} />
        <Route path='/post-form' component={AddPostPage} />
        <Route path='/post-edit/:id' component={EditPostPage} />
      </Switch>
    </Router>
  </MuiThemeProvider>

LAST : Remove the <MuiThemeProvider> wrapper in any of your components

*/