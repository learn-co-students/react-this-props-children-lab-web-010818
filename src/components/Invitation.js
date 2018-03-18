import React from 'react';

const Invitation = props => {
  return (
    <div>
      <h1>You've been invited!</h1>
      <div>{props.children}</div>
    </div>
  )
}

export default Invitation;
