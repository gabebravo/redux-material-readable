import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Spinner from './Spinner'

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

const printButtons = arr => {
  return arr.map( (category, index) => {
    return <RaisedButton key={index} href={`/categories/${category}`} label={`${category}`} secondary={true} style={btnStyle} />
  })
}

const ButtonRow = ({ title = null, categories = [] }) => {
  const categoryButtons = Array.isArray(categories) ?
    printButtons(categories): <Spinner />
  return (
    <Grid>
      <Row is="start" className="mainpage-spacing">
        <Cell is="middle 2 tablet-4 phone-4"><h6 style={h6Styles}>{title}</h6></Cell>
        <Cell is="middle 5 tablet-4 phone-4">
          <div style={{ display: 'inline' }}>
            {categoryButtons}
          </div>
        </Cell>
      </Row>
    </Grid>
  );
}

export default ButtonRow;
