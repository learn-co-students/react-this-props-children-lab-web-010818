// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecorations extends React.Component {
  render(){
    const kids = React.Children.map(this.props.children, child =>{
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>
      { kids }
      </div>
    )
  }
}

export default ThemedDecorations
