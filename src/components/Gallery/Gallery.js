import React from 'react';
import Example from './Example/Example';
import Paragraph from '../Paragraph/Paragraph';
import './Gallery.css'

const Gallery = (props) => {
  return (
    <div className={'cards'}>
      <Example
        link='https://corbltd.herokuapp.com/' 
        img='corb_landing.png' 
        front='Corb Limited'
        back={<Paragraph text='Website for an electrical contracting company in Telford. Built using Ruby on Rails and Bootstrap for CSS.'/>}
      />
      <Example
        link='https://www.illuminate-app.tech/' 
        img='https://i.ibb.co/QfXWytN/illuminate1.png' 
        front='Illuminate'
        back={<Paragraph text='A full stack mobile focused web app for finding the right light bulb, using RoR, Bootstrap and JavaScript.'/>}
      />
      <Example
        link='https://aircars.herokuapp.com/' 
        img='https://i.ibb.co/zs70cXV/Screenshot-from-2021-03-15-11-10-55.png' 
        front='AirCars'
        back={<Paragraph text='A full stack car rental site in Ruby on Rails, with relational database and user login.'/>}
      />
      <Example
        link='https://kurtpeniket.github.io/snake/' 
        img='https://i.ibb.co/cwGdVkY/Screenshot-25.png' 
        front='Retro Snake Game'
        back={<Paragraph text='A full working game and dynamic high score board written using only HTML/CSS and JavaScript.'/>}
      />
      <Example 
        link='https://kurts-cocktails.herokuapp.com/'
        img='cocktail.png'
        front='Cocktail Manager'
        back={<Paragraph text='A working full stack cocktail manager built with Ruby on Rails. Full interactive with persistant instances because of backend relational database.' />}
      />
      <Example
        link='https://kurtpeniket.github.io/rota_generator/' 
        img='https://i.ibb.co/R21wb20/Screenshot-from-2021-04-28-16-36-18.png' 
        front='Rota Generator'
        back={<Paragraph text='Work in progress, built with vanila JavaScript and Bootstrap. Includes a custom validation function to detect duplicates in class and ignore them.'/>}
      />

    </div>
  )
};

export default Gallery;