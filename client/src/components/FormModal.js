import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setAddCommentModal, setCommentForm } from '../actions'
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

  componentDidMount() {
    if ( this.props.commentModal.formType === 'add') {
      this.props.setCommentForm({
        'id': uuidv4().split('-').join('').toString(), 
        'timestamp': Date.now(),
        'voteScore': 1
      });
    } else if ( this.props.commentModal.formType === 'edit') {
      console.log('inside did mount and edit was clicked')
    }
  }

  handleTextFields = (event, index, value) => {
    this.props.setCommentForm({ [`${event.target.id}`]: event.target.value} )
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
        onClick={this.props.modalHandler}
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
          <TextField type="text" value={this.props.commentForm.author || ''} onChange={this.handleTextFields} id="author" name="author" hintText="Enter Author" />
          <TextField type="text" value={this.props.commentForm.body || ''} onChange={this.handleTextFields} id="body" name="body" hintText="Enter Text" />
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ commentModal, commentForm }) => ({ commentModal, commentForm })
const actions = { setAddCommentModal, setCommentForm }
export default connect(mapStateToProps, actions)(FormModal)

// id: Any unique ID. As with posts, UUID is probably the best here.
// timestamp: timestamp. Get this however you want.
// body: String
// owner: String
// parentId: Should match a post id in the database.