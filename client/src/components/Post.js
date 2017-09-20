import React from 'react'
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
import ViewIcon from 'material-ui/svg-icons/action/visibility'
import { Link } from 'react-router-dom'

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

const btnStlyes = {
  marginRight: 10,
  marginBottom: 10
}

const Post = ({ id, incrementScore, decrementScore, title, timestamp, author, 
  category, comments, voteScore, body, btnArr = false }) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={`${timestamp} by ${author}`}
      avatar={
        <Link to={`/post-info/${id}`}><ViewIcon style={iconStyles} /></Link>
      }
    />
    <div style={styles.wrapper}>
      <Chip style={styles.chip}>{category}</Chip>
      <Chip style={styles.chip}>{`Comments: ${comments}`}</Chip>
      <Chip style={styles.chip}>{`Score: ${voteScore}`}</Chip>
    </div>
    <CardText>{body}</CardText>
    <CardActions>
    <div style={{ display: 'inline' }}>
      <RaisedButton onClick={incrementScore} label="Score" secondary={true} style={btnStlyes} icon={<AddIcon/>} />
      <RaisedButton onClick={decrementScore} label="Score" secondary={true} style={btnStlyes} icon={<RemoveIcon/>} />
      {
        btnArr && 
        (<div style={{ display: 'inline' }}>
          <Link to={`/post-edit/${id}`}><RaisedButton label="Edit" secondary={true} style={btnStlyes} /></Link>
          <RaisedButton label="Delete" secondary={true} style={btnStlyes} />
        </div>)
      }
    </div>
    </CardActions>
  </Card>
);

export default Post;