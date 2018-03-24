import React, { Children, cloneElement } from 'react';

const ThemedDecorations = props => {
  const childrenWithExtraProp = Children.map(props.children, c =>
    cloneElement(c, { className: props.theme })
  );
  return <div>{childrenWithExtraProp}</div>;
};

export default ThemedDecorations;
