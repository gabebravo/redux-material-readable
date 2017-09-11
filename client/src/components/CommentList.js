import React, { Component } from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ButtonSet from '../components/ButtonSet'
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'

const paragraphStyles = {
  margin: 'auto', 
  marginBottom: '.5em', 
  fontFamily: 'Roboto, sans-serif',
  color: 'rgba(0, 0, 0, 0.54)'
}

const divStyles = {
  marginTop: '1rem', 
  marginBottom: '2rem', 
  paddingTop: 0, 
}

export default class CommentList extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Grid>
          <Row is="start">
            <Cell is="middle 3 tablet-4 phone-4">
              <div style={divStyles}>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Date: </span>January 12, 2017</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Score: </span>3.5</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Author: </span>Joe Smith</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Comment: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nibh lacinia, laoreet nisl nec, tempor mas.</p>
                <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
                <ButtonSet btn1Text="Edit" btn2Text="Delete" />
              </div>
              <hr></hr>
            </Cell>
          </Row>
        </Grid>
        <Grid>
          <Row is="start">
            <Cell is="middle 3 tablet-4 phone-4">
              <div style={divStyles}>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Date: </span>January 12, 2017</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Score: </span>3.5</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Author: </span>Joe Smith</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Comment: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nibh lacinia, laoreet nisl nec, tempor mas.</p>
                <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
                <ButtonSet btn1Text="Edit" btn2Text="Delete" />
              </div>
              <hr></hr>
            </Cell>
          </Row>
        </Grid>
        <Grid>
          <Row is="start">
            <Cell is="middle 3 tablet-4 phone-4">
              <div style={divStyles}>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Date: </span>January 12, 2017</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Score: </span>3.5</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Author: </span>Joe Smith</p>
                <p style={paragraphStyles}><span style={{fontWeight: 'bold'}}>Comment: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed nibh lacinia, laoreet nisl nec, tempor mas.</p>
                <ButtonSet btn1Text="Score" btn2Text="Score" svg1={<AddIcon/>} svg2={<RemoveIcon/>} />
                <ButtonSet btn1Text="Edit" btn2Text="Delete" />
              </div>
              <hr></hr>
            </Cell>
          </Row>
        </Grid>
      </div>
      </MuiThemeProvider>
    )
  }
}