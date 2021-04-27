import React from 'react'
import Paragraph from './Paragraph/Paragraph';
import ReactCardFlip from 'react-card-flip';

class Flip extends React.Component {
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
        <Paragraph text='FRONT'>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Paragraph>

        <Paragraph text='BACK'>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Paragraph>
      </ReactCardFlip>
    )
  }
}

export default Flip;