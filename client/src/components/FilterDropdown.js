import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilterDropdown, setPosts, setSelectedPostComments } from '../actions'
import { sortArray } from '../utils'
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
        <MenuItem value={1} onClick={ this.props.filterType === 'posts' ?
            () => this.props.filterPosts(sortArray(this.props.posts, 'score')) :
            () => this.props.filterComments(sortArray(this.props.selectedPostComments, 'score'))
          } primaryText="Score" />
        <MenuItem value={2} onClick={ this.props.filterType === 'posts' ?
            () => this.props.filterPosts(sortArray(this.props.posts, 'date')) :
            () => this.props.filterComments(sortArray(this.props.selectedPostComments, 'date'))
          } primaryText="Date" />
      </SelectField>): 
      <Spinner />
    return (
      <div>{view}</div>
    )
  }
}

const mapStateToProps = ({ posts, selectedPostComments, filterDropdown }) => ({ posts, selectedPostComments, filterDropdown });
const mapDispatchToProps = dispatch => ({
  setDropdown: numValue => dispatch( setFilterDropdown(numValue)),
  filterPosts: posts => dispatch( setPosts(posts)),
  filterComments: comments => dispatch( setSelectedPostComments(comments)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown)

