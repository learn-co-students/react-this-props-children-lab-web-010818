import React from 'react';

export default class Invitation extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => <div>{child}</div>)
    return (
      <div>
        <h1>You've been invited!</h1>
        {children}
      </div>

    )
  }
}
