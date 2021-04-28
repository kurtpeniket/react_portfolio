import React from 'react';
import './Banner.css';
import LazyHero from 'react-lazy-hero';

const banner = (props) => {
  return (
    <div className={'banner-text'}>
      <LazyHero 
        color='#212121'
        minHeight='75vh'
        parallaxOffset='100'
        // opacity='0'
        imageSrc='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'>
        <h2>{props.heading}</h2>
        <p>{props.subtitle}</p>
      </LazyHero>
    </div>
  )
};

export default banner;