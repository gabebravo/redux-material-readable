import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import RaisedButton from 'material-ui/RaisedButton'

const h6Styles = {
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.54)',
  fontSize: '1.5rem',
  fontWeight: '300', 
  lineHeight: 0,  
  width: '100%', 
  fontFamily: 'sans-serif'
}

const btnStyle = {
  marginRight: 10,
  marginBottom: 10
}

const ButtonRow = ({ title = null, btn1, btn2, btn3 }) => {
  return (
    <Grid>
      <Row is="start" className="mainpage-spacing">
        <Cell is="middle 2 tablet-4 phone-4"><h6 style={h6Styles}>{title}</h6></Cell>
        <Cell is="middle 5 tablet-4 phone-4">
          <div style={{ display: 'inline' }}>
            <RaisedButton label={`${btn1}`} secondary={true} style={btnStyle} />
            <RaisedButton label={`${btn2}`} secondary={true} style={btnStyle} />
            <RaisedButton label={`${btn3}`} secondary={true} style={btnStyle} />
          </div>
        </Cell>
      </Row>
    </Grid>
  );
}

export default ButtonRow;
