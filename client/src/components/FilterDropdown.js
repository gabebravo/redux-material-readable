import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDropdown, setPosts } from '../actions'
import { sortPostsArray } from '../utils'
import SelectField from 'material-ui/SelectField';
import Spinner from './Spinner';
import MenuItem from 'material-ui/MenuItem';

class FilterDropdown extends Component {

  handleChange = (event, index, value) => this.props.setDropdown(value)

  render() {
    const view = typeof this.props.filterDropdown === 'number' ?
      (<SelectField
        floatingLabelText="Filter By"
        value={this.props.filterDropdown}
        onChange={this.handleChange}
      >
        <MenuItem value={1} onClick={() => this.props.filterPosts(sortPostsArray(this.props.posts, 'score'))} primaryText="Score" />
        <MenuItem value={2} onClick={() => this.props.filterPosts(sortPostsArray(this.props.posts, 'date'))} primaryText="Date" />
      </SelectField>): 
      <Spinner />
    return (
      <div>{view}</div>
    )
  }
}

const mapStateToProps = ({ posts, filterDropdown }) => ({ posts, filterDropdown });
const mapDispatchToProps = dispatch => ({
  setDropdown: numValue => dispatch( setDropdown(numValue)),
  filterPosts: posts => dispatch( setPosts(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown)

