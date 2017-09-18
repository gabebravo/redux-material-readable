import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import PostForm from '../components/PostForm'

const styles = {
  form: {
    display: 'inline-grid',
    marginLeft: '20px',
    marginTop: '20px', 
  }
}

class FormModal extends Component {
  
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
          <TextField type="text" onChange={() => console.log('author changed')} id="author" name="author" hintText="Enter Author" />
          <TextField type="text" onChange={() => console.log('text changed')} id="text" name="text" hintText="Enter Text" />
        </div>
        </Dialog>
      </div>
    );
  }
}

export default FormModal

// id: Any unique ID. As with posts, UUID is probably the best here.
// timestamp: timestamp. Get this however you want.
// body: String
// owner: String
// parentId: Should match a post id in the database.