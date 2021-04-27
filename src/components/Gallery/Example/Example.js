import React from 'react';
import './Example.css';

const Example = (props) => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${props.img})`
  }

  return (
    <div style={style}>
      <a href={props.link}>
        <div className={'card'}>
          Breakfast
        </div>
      </a>
    </div>
  )
};

export default Example;