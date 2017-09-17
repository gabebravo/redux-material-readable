import React from 'react'
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import ButtonSet from '../components/ButtonSet'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const MainPost = ({ postData }) => (
  <div>
    <Card>
      <CardTitle title={postData.title} subtitle="01/17/2017 by Joe Smith" />
      <div style={styles.wrapper}>
        <Chip style={styles.chip}>{postData.category}</Chip>
        <Chip style={styles.chip}>{`Comments: ${postData.comments}`}</Chip>
        <Chip style={styles.chip}>{`Score: ${postData.voteScore}`}</Chip>
      </div>
      <CardText>{postData.body}</CardText>
      <CardActions>
        <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
        <ButtonSet btn1Text="Edit" btn2Text="Delete" />
      </CardActions>
    </Card>
  </div>
);

export default MainPost;
