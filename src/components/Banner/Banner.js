import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';

const banner = (props) => {
  const Style = styled.div`
    color: white;
    font-size: 40px;
  `
  return (
    <Style>
      <div>
        <LazyHero 
          color='#212121'
          minHeight='75vh'
          parallaxOffset='100'
          imageSrc='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'>
          <h2>{props.heading}</h2>
          <p>{props.subtitle}</p>
        </LazyHero>
      </div>
    </Style>
  )
};

export default banner;