import React from 'react';
import { connect } from 'react-redux'
import { setRedirectModal } from '../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class RedirectModal extends React.Component {

  componentWillUnmount(){
    this.props.setRedirectModal(this.props.redirectModal)
  }

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

const mapStateToProps = ({ redirectModal }) => ({ redirectModal });
const actions={ setRedirectModal }
export default connect(mapStateToProps, actions)(RedirectModal)