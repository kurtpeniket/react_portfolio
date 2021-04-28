import React from 'react';
import styled from 'styled-components';

const caption = (props) => {
  const CardStyle = styled.div`
    .container {
      margin-top: 5%;
      padding: 20px;
      display: flex;
      justify-content: center;
    }
    
    .content {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
      background-color: #E0E0E0;
      width: 300px;
      position: relative;
      border-radius: 8px;
      padding: 20px;
    }

    img {
      width: 80px;
      border-radius: 25%;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  `
  return (
    <CardStyle>
      <div className={'container'}>
          <div className={'content'}>
            <div>
              <h1>Caption</h1>
              <p>Paragraph</p>
            </div>
            <img src='profile.jpg' alt='avatar'/>
          </div>
      </div>
    </CardStyle>
  )
};

export default caption;