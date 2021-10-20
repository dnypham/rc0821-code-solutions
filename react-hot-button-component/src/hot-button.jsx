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

  render() {
    const clicks = this.state.clicks;
    let btnColor;

    if (clicks < 3) {
      btnColor = 'btn-0';
    } else if (clicks < 6) {
      btnColor = 'btn-3';
    } else if (clicks < 9) {
      btnColor = 'btn-6';
    } else if (clicks < 12) {
      btnColor = 'btn-9';
    } else if (clicks < 15) {
      btnColor = 'btn-12';
    } else if (clicks < 18) {
      btnColor = 'btn-15';
    } else if (clicks >= 18) {
      btnColor = 'btn-18';
    }

    return (
      <button className={`btn ${btnColor}`} onClick={this.handleClick}>Hot Button</button>
    );
  }

}

export default HotButton;
