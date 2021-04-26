import React from 'react';
import './Banner.css';
import LazyHero from 'react-lazy-hero';

const banner = (props) => {
  return (
    <div className={'banner-text'}>
      <LazyHero imageSrc="https://source.unsplash.com/random">
        <h2>{props.heading}</h2>
        <p>{props.subtitle}</p>
      </LazyHero>
    </div>
  )
};

export default banner;