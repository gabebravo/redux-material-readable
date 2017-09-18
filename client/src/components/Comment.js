import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCommentScore } from '../actions'
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
  render() {
    const { id, parentId, timestamp, body, author, voteScore } = this.props;
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
          <RaisedButton label="Edit" secondary={true} style={btnStlyes} />
          <RaisedButton label="Delete" secondary={true} style={btnStlyes} />
        </CardActions>
      </Card>
    );
  }
}

const actions = { handleCommentScore }
export default connect(null, actions)(Comment);