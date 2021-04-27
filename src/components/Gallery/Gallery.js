import React from 'react';
import Example from './Example/Example';
import Paragraph from '../Paragraph/Paragraph';
import './Gallery.css'

const Gallery = (props) => {
  return (
    <div className={'cards'}>
      <Example
        link='https://www.illuminate-app.tech/' 
        img='https://i.ibb.co/QfXWytN/illuminate1.png' 
        front='Illuminate'
        back={<Paragraph text='A full stack mobile focused web app for finding the right light bulb, using RoR, Bootstrap and JavaScript.'/>}
      />

      <Example img='https://source.unsplash.com/random' />
      <Example />
    </div>
  )
};

export default Gallery;