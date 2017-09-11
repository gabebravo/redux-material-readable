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

const Comment = () => (
  <Card>
    <CardTitle title="Joe Smith" subtitle="01/17/2017" />
    <div style={styles.wrapper}>
      <Chip style={styles.chip}>Score: 3.5</Chip>
    </div>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
      <ButtonSet btn1Text="Edit" btn2Text="Delete" />
    </CardActions>
  </Card>
);

export default Comment;