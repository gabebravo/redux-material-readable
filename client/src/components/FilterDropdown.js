import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class FilterDropdown extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <MuiThemeProvider>
        <SelectField
          floatingLabelText="Filter By"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Score" />
          <MenuItem value={2} primaryText="Date" />
        </SelectField>
      </MuiThemeProvider>
    )
  }
}
