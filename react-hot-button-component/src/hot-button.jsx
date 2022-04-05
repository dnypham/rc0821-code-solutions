import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  getColor() {
    const clicks = this.state.clicks;

    if (clicks < 3) {
      return 'btn-0';
    } else if (clicks < 6) {
      return 'btn-3';
    } else if (clicks < 9) {
      return 'btn-6';
    } else if (clicks < 12) {
      return 'btn-9';
    } else if (clicks < 15) {
      return 'btn-12';
    } else if (clicks < 18) {
      return 'btn-15';
    } else if (clicks >= 18) {
      return 'btn-18';
    }
  }

  render() {

    return (
      <div className='button-container'>
        <button className={`btn ${this.getColor()}`} onClick={this.handleClick}>Hot Button</button>
      </div>
    );
  }

}

export default HotButton;
