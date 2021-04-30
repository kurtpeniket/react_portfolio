import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Style = styled.div`
  .footer {
    background: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0px 80px;
    color: rgba(0,0,0,0.3);
  }
  .footer-links {
    display: flex;
    align-items: center;
  }
  .footer-links a {
    color: black;
    opacity: 0.15;
    text-decoration: none;
    font-size: 34px;
    padding: 0px 30px;
  }
  .footer-links a:hover {
    opacity: 1;
  }

  .footer-copyright {
    font-size: 20px;
    font-weight bold;
  }

  .react {
    color: #61DBFB;
  }

  .css {
    color: #264de4;
  }

  @media (min-width: 100px) and (max-width: 575px) {
    .footer-copyright {
      font-size: 16px;
    }
    .footer-links a {
      font-size: 20px;
      padding: 10px;
    }
    .footer {
      padding: 0;
    }
  }
`
const footer = (props) => {
  return (
    <Style>
      <div className={'footer'}>
        <div className={'footer-links'}>
          <a href='https://github.com/kurtpeniket' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/kurtpeniket' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='mailto:kurt.peniket@gmail.com' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <div className={'footer-copyright'}>
          This website was made by me using React <FontAwesomeIcon className={'react'} icon={faReact} size='lg' /> and some CSS <FontAwesomeIcon className={'css'} icon={faCss3Alt} size='lg' />
        </div>
      </div>
    </Style>
  )
};

export default footer;