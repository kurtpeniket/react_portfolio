import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  .container {
    padding: 40px;
  }
  
  .content {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
    background-color: #F4F4F4;
    width: 90vw;
    position: relative;
    border-radius: 8px;
    padding: 20px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    right: 130px;
  }

  @media (min-width: 100px) and (max-width: 575px) {
    img {
      right: 150px;
      top: -80px;
    }
  }
`
const caption = (props) => {
  return (
    <CardStyle>
      <div className={'container'}>
          <div className={'content'}>
            <div>
              <h2>{props.heading}</h2>
              <p>{props.content}</p>
              {props.children}
            </div>
            <img src={props.img} alt='avatar'/>
          </div>
      </div>
    </CardStyle>
  )
};

export default caption;