import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import { Link } from 'react-router-dom'
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

const printButtons = (posts, comments, categories) => {
  return categories.map( (category, index) => {
    return (
      <Link key={index} to={`/categories/${category}`}>
        <RaisedButton key={index} label={`${category}`} secondary={true} style={btnStyle} />
      </Link>
    )
  })
}

const ButtonRow = ({ title = null, categories = [], comments = [], posts = [] }) => {
  const categoryButtons = categories.length > 0 ?
    printButtons(posts, comments, categories): <Spinner />
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
