import React from 'react'

const ThemedParty = (props) => {
  const childrenWithClass = props.children.map(child => (
    <div className={props.theme}>
      {child}
    </div>
  ))
  return (
    <div>
      {childrenWithClass}
    </div>
  )
}

export default ThemedParty;
