import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setAddCommentModal, setCommentForm, handleAddingComment, 
  handleUpdatingComment, resetCommentForm } from '../actions'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
const uuidv4 = require('uuid/v4');

const styles = {
  form: {
    display: 'inline-grid',
    marginLeft: '20px',
    marginTop: '20px', 
  }
}

class FormModal extends Component {

  handleTextFields = (event, index, value) => {
    this.props.setCommentForm({ [`${event.target.id}`]: event.target.value} )
  }

  submitData = (parentId = null) => { // logic to pick form operation
    const postBody = {...this.props.commentForm}

    if( this.props.commentModal.formType === 'add' ) {
      postBody.id = uuidv4().split('-').join('').toString(); 
      postBody.timestamp = Date.now();
      postBody.voteScore = 1;
      postBody.parentId = parentId;
      this.props.handleAddingComment(postBody);
    } else if ( this.props.commentModal.formType === 'edit' ) {
      this.props.handleUpdatingComment(postBody);
    }
    this.props.resetCommentForm();
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.modalHandler}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={ () => { this.props.modalHandler(); this.submitData(this.props.parentId); }}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.show}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <div style={styles.form}>
          <TextField type="text" disabled={ this.props.commentModal.formType === 'edit' ? true: false} value={this.props.commentForm.author || ''} 
            onChange={this.handleTextFields} id="author" name="author" hintText={ this.props.commentModal.formType === 'edit' ? this.props.commentForm.author: "Enter Author" } />
          <TextField type="text" value={this.props.commentForm.body || ''} onChange={this.handleTextFields} id="body" name="body" hintText="Enter Text" />
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ commentModal, commentForm }) => ({ commentModal, commentForm })
const actions = { setAddCommentModal, setCommentForm, handleAddingComment, resetCommentForm, handleUpdatingComment }
export default connect(mapStateToProps, actions)(FormModal)