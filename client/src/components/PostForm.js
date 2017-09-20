import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFormData, handleAddingPost, resetFormData } from '../actions'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
const uuidv4 = require('uuid/v4');

const styles = {
  display: 'inline-grid',
  marginLeft: '20px',
  marginTop: '20px', 
}

const btnStyles = { 
  width: '15%',
  marginTop: '2rem', marginLeft: '1rem', 
  backgroundColor: 'rgb(255, 64, 129)' 
}

export class PostForm extends Component {

  componentDidMount() {
    this.props.setFormData('id', uuidv4().split('-').join('').toString());
    this.props.setFormData('timestamp', Date.now());
    this.props.setFormData('voteScore', 1);
    this.props.setFormData('category', 'react');
  }

  handleMenu = (event, index, value) => {
    switch(event.target.id){
      case 'title': this.props.setFormData('title', event.target.value)
        break;
      case 'text': this.props.setFormData('body', event.target.value)
        break;
      case 'author': this.props.setFormData('author', event.target.value)
        break;
      default:
        this.props.setFormData('category', value.toLowerCase())
    }
  }

  submitData = () => {
    this.props.handleAddingPost(this.props.formData);
    this.props.resetFormData();
  }

  render() {
    return (
      <div>
        <div style={styles}>
          <TextField type="text" onChange={this.handleMenu} id="title" name="title" hintText="Enter Title" />
          <TextField type="text" onChange={this.handleMenu} id="text" name="text" hintText="Enter Text" />
          <TextField type="text" onChange={this.handleMenu} id="author" name="author" hintText="Enter Author" />
          <DropDownMenu value={this.props.formData.category}
              onChange={this.handleMenu}>
            <MenuItem value="react" primaryText="React" />
            <MenuItem value="redux" primaryText="Redux" />
            <MenuItem value="javascript" primaryText="Javascript" />
          </DropDownMenu>
        </div>
        <div>
          <RaisedButton onClick={this.submitData} style={btnStyles} label="Submit" secondary={true} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ formData }) => ({ formData });
const actions = { setFormData, handleAddingPost, resetFormData }

export default connect(mapStateToProps, actions)(PostForm)

