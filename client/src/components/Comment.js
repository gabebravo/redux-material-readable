import React from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import ButtonSet from '../components/ButtonSet'
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

const Comment = ({ id, parentId, timestamp, body, author, voteScore }) => (
  <Card>
    <CardTitle title={author} subtitle={convertUnixToDate(timestamp)} />
    <div style={styles.wrapper}>
      <Chip style={styles.chip}>{`Score: ${voteScore}`}</Chip>
    </div>
    <CardText>{body}</CardText>
    <CardActions>
      <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
      <ButtonSet btn1Text="Edit" btn2Text="Delete" />
    </CardActions>
  </Card>
);

export default Comment;