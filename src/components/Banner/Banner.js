import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const banner = (props) => {
  const Style = styled.div`
    .title {
      font-size: 36px;
      color: white;
    }

    a {
      color: white;
    }
  
    a:visited {
      color: white;
    }
  
    a:hover {
      color: black;
    }
  
    .links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 50px;
      color: rgba(0,0,0,0.3);
    }
  `
  return (
    <Style>
      <div className={'title'}>
        <LazyHero 
          color='#212121'
          minHeight='75vh'
          parallaxOffset='100'
          imageSrc='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'>
          <h2>{props.heading}</h2>
          <p>{props.subtitle}</p>
          <div className={'links'}>
              <a href='https://github.com/kurtpeniket' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} size=''/></a>
              <a href='https://github.com/kurtpeniket' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} size=''/></a>
              <a href='https://github.com/kurtpeniket' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faEnvelope} size=''/></a>
          </div>
        </LazyHero>
      </div>
    </Style>
  )
};

export default banner;