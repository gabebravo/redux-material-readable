import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilterDropdown, setPosts, setComments } from '../actions'
import { sortArray } from '../utils'
import SelectField from 'material-ui/SelectField';
import Spinner from './Spinner';
import MenuItem from 'material-ui/MenuItem';

class FilterDropdown extends Component {

  handleChange = (event, index, value) => this.props.setDropdown(value)

  componentWillUnmount() {
    this.props.setDropdown(1)
  }

  render() {
    const view = this.props.filterDropdown.numValue ?
      (<SelectField
        floatingLabelText="Filter By"
        value={this.props.filterDropdown.numValue}
        onChange={this.handleChange}
      >
        <MenuItem value={1} onClick={ this.props.filterType === 'posts' ?
            () => this.props.filterPosts(sortArray(this.props.posts, 'score')) :
            () => this.props.filterComments(sortArray(this.props.comments, 'score'))
          } primaryText="Score" />
        <MenuItem value={2} onClick={ this.props.filterType === 'posts' ?
            () => this.props.filterPosts(sortArray(this.props.posts, 'date')) :
            () => this.props.filterComments(sortArray(this.props.comments, 'date'))
          } primaryText="Date" />
      </SelectField>): 
      <Spinner />
    return (
      <div>{view}</div>
    )
  }
}

const mapStateToProps = ({ posts, comments, filterDropdown }) => ({ posts, comments, filterDropdown });
const mapDispatchToProps = dispatch => ({
  setDropdown: numValue => dispatch( setFilterDropdown(numValue)),
  filterPosts: posts => dispatch( setPosts(posts)),
  filterComments: comments => dispatch( setComments(comments)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropdown)

