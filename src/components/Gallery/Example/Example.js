import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

const Styles = styled.div`
.card {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${props => props.img})
}

.card p {
  padding: 30px;
  font-size: 16px;
}

.card, a:link {
    text-decoration: none;
}
`

class Example extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Styles img={this.props.img}>
          <div onMouseEnter={this.handleClick}>
            <a href={this.props.link} rel='noreferrer' target='_blank'>
              <div className={'card'}>
                {this.props.children}
                {this.props.front}
              </div>
            </a>
          </div>
        </Styles>

        <Styles>
          <div onMouseLeave={this.handleClick}>
            <a href={this.props.link} rel='noreferrer' target='_blank'>
              <div className={'card'}>
                {this.props.children}
                {this.props.back}
                {this.props.children}
              </div>
            </a>
          </div>
        </Styles>
      </ReactCardFlip>
    )
  }
}

export default Example;