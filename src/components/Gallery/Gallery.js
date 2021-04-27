import React from 'react';
import Example from './Example/Example';
import './Gallery.css'

const Gallery = (props) => {
  return (
    <div className={'cards'}>
      <Example link='https://uikit.lewagon.com/documentation#card_category' img='https://source.unsplash.com/random'/>
      <Example />
      <Example />
    </div>
  )
};

export default Gallery;