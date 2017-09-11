import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ScoreInc from 'material-ui/svg-icons/content/add';
import ScoreDec from 'material-ui/svg-icons/content/remove';

const styles = {
  backgroundColor: 'rgb(255, 64, 129)', 
  borderRadius: '12px',
  fill: '#fff'
}

const ScoreButtons = () => (
  <div style={{ display: 'inline-block'}}>
    <FlatButton
      secondary={true}
      icon={<ScoreInc style={styles} />}
    />
    <FlatButton
      secondary={true}
      icon={<ScoreDec style={styles} />}
    />
  </div>
);

export default ScoreButtons;