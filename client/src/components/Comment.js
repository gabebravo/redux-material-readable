import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCommentScore, setAddCommentModal, handleCommentDelete, setCommentForm } from '../actions'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
const moment = require('moment');

const convertUnixToDate = timestamp => moment(new Date().setTime(timestamp)).format("MM/DD/YYYY");

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const btnStlyes = {
  marginRight: 10,
  marginBottom: 10
}

class Comment extends Component {

  toggle = () => {
    const editComment = this.props.comments.filter( comment => comment.id === this.props.id)[0];
    this.props.setCommentForm({ id: editComment.id })
    this.props.setCommentForm({ timestamp: Date.now() })
    this.props.setCommentForm({ body: editComment.body })
    this.props.setCommentForm({ author: editComment.author })
    this.props.setAddCommentModal(!this.props.commentModal.isOpen, "edit", this.props.id);
  }

  render() {
    const { id, timestamp, body, author, voteScore } = this.props;
    return (
      <Card>
        <CardTitle title={author} subtitle={convertUnixToDate(timestamp)} />
        <div style={styles.wrapper}>
          <Chip style={styles.chip}>{`Score: ${voteScore}`}</Chip>
        </div>
        <CardText>{body}</CardText>
        <CardActions>
          <RaisedButton onClick={() => this.props.handleCommentScore(id, voteScore, true)} label="Score" secondary={true} style={btnStlyes} icon={<AddIcon/>} />
          <RaisedButton onClick={() => this.props.handleCommentScore(id, voteScore, false)} label="Score" secondary={true} style={btnStlyes} icon={<RemoveIcon/>} />
          <RaisedButton label="Edit" onClick={this.toggle} secondary={true} style={btnStlyes} />
          <RaisedButton label="Delete" onClick={() => this.props.handleCommentDelete(id)} secondary={true} style={btnStlyes} />
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = ({ commentModal, comments }) => ({ commentModal, comments })
const actions = { handleCommentScore, setAddCommentModal, handleCommentDelete, setCommentForm }
export default connect(mapStateToProps, actions)(Comment);