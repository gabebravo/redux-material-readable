import React from 'react';
import { Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class GenericModal extends React.Component {

  render() {
    const {show, modalHandler} = this.props;
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={modalHandler}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={show || false}
        >{this.props.text}</Dialog>
      </div>
    );
  }
}