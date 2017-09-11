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

const Post = () => (
  <Card>
    <CardHeader
      title="What's Up With Birds"
      subtitle="01/17/2017 by Joe Smith"
      avatar={<ViewIcon style={iconStyles} />}
    />
    <div style={styles.wrapper}>
      <Chip style={styles.chip}>React</Chip>
      <Chip style={styles.chip}>Comments: 22</Chip>
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
    </CardActions>
  </Card>
);

export default Post;