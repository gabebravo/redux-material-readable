import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import ButtonSet from '../components/ButtonSet'

const h6Styles = {
  boxSizing: 'border-box',
  color: 'rgba(0, 0, 0, 0.54)',
  fontSize: '1.5rem',
  fontWeight: '300', 
  lineHeight: 0,  
  width: '100%', 
  fontFamily: 'sans-serif'
}

const ButtonRow = ({ title = null, btn1, btn2, btn3, btn4 }) => {
  return (
    <Grid>
      <Row is="start" className="mainpage-spacing">
        <Cell is="middle 2 tablet-4 phone-4"><h6 style={h6Styles}>{title}</h6></Cell>
        <Cell is="middle 5 tablet-4 phone-4">
          <div><ButtonSet btn1Text={btn1} btn2Text={btn2} />
            <ButtonSet btn1Text={btn3} btn2Text={btn4} /></div>
        </Cell>
      </Row>
    </Grid>
  );
}

export default ButtonRow;
