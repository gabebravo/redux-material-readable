import React from 'react'
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import ButtonSet from '../components/ButtonSet'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
import ViewIcon from 'material-ui/svg-icons/action/visibility'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const iconStyles = {
  height: 35, 
  width: 35,
  color: 'rgb(0, 188, 212)'
}

const Post = ({ id, title, timestamp, author, category, comments, voteScore, body }) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={`${timestamp} by ${author}`}
      avatar={<ViewIcon style={iconStyles} />}
    />
    <div style={styles.wrapper}>
      <Chip style={styles.chip}>{category}</Chip>
      <Chip style={styles.chip}>{`Comments: ${comments}`}</Chip>
      <Chip style={styles.chip}>{`Score: ${voteScore}`}</Chip>
    </div>
    <CardText>{body}</CardText>
    <CardActions>
      <ButtonSet id={id} btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
    </CardActions>
  </Card>
);

export default Post;