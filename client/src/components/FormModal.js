import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Form from '../components/Form'

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
          modal={true}
          open={this.props.show}
        >
          <Form/>
        </Dialog>
      </div>
    );
  }
}

export default FormModal