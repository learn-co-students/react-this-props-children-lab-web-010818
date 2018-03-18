import React from 'react';

const ThemedDecorations = props => {
  const childrenWithTheme = React.Children.map(props.children, child => {
    return (
      <div className={props.theme}>{child}</div>
    )
  })

  return (
    <div>
      {childrenWithTheme}
    </div>
  )
}

export default ThemedDecorations;
