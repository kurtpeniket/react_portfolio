import React from 'react';

const paragraph = (props) => {
  return (
    <div>
      <p>{props.text}{props.children}</p>
    </div>
  )
};

export default paragraph;