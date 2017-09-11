import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = ({ btnText }) => {
  return (
    <MuiThemeProvider>
      <RaisedButton
        label={`${btnText}`}
        labelPosition="before"
        secondary={true}
        icon={<ContentAdd />}
      />
    </MuiThemeProvider>
  )
}

export default AddButton
