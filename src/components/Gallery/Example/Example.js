import React from 'react';
import './Example.css';
import ReactCardFlip from 'react-card-flip';

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

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${this.props.img})`
    }

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div style={style} onMouseEnter={this.handleClick}>
            <a href={this.props.link}>
              <div className={'card'}>
                {this.props.children}
                {this.props.front}
              </div>
            </a>
          </div>

          <div style={style} onMouseLeave={this.handleClick}>
            <a href={this.props.link}>
              <div className={'card'}>
                {this.props.children}
                {this.props.back}
              </div>
            </a>
          </div>
      </ReactCardFlip>
    )
  }
}

// const Example = (props) => {

//   return (
//     <div style={style}>
//       <a href={props.link}>
//         <div className={'card'}>
//           {props.children}
//           Breakfast
//         </div>
//       </a>
//     </div>
//   )
// };

export default Example;