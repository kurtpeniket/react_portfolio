import React from 'react';
import styled from 'styled-components';

const subheading = (props) => {
  const Style = styled.div`
    h2 {
      color: white;
      text-align: center;
      text-decoration: underline;
    }
  `
  return (
    <Style>
      <div>
        <h2>{props.heading}</h2>
        <h3>{props.subtitle}</h3>
      </div>
    </Style>
  )
};

export default subheading;