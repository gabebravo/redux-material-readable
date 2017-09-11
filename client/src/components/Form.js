import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
//import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  display: 'inline-grid',
  marginLeft: '20px',
  marginTop: '20px'
}

export class Form extends Component {

  state = {
    value: 'React'
  };

  handleMenu = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={styles}>
        <TextField hintText="Enter Title" />
        <TextField hintText="Enter Text" />
        <TextField hintText="Enter Author" />
        <DropDownMenu value={this.state.value}
            onChange={this.handleMenu}>
          <MenuItem value={'React'} primaryText="React" />
          <MenuItem value={'Redux'} primaryText="Redux" />
          <MenuItem value={'Javascript'} primaryText="Javascript" />
          <MenuItem value={'Udacity'} primaryText="Udacity" />
        </DropDownMenu>
      </div>
    )
  }
}

export default Form

//<RaisedButton style={{ marginTop: '2rem'}} label="Submit" secondary={true} />
