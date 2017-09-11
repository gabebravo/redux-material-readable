import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  marginRight: 10,
  marginBottom: 10
}

const ButtonSet = ({ btn1Text, btn2Text, svg1 = null, svg2 = null }) => {
  return (
    <div style={{ display: 'inline' }}>
      <RaisedButton label={`${btn1Text}`} secondary={true} style={style} icon={svg1} />
      <RaisedButton label={`${btn2Text}`} secondary={true} style={style} icon={svg2} />
    </div>
  )
}

export default ButtonSet
