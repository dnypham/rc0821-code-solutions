import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  slide() {
    const toggle = this.state.toggle;

    if (!toggle) {
      return 'circle-off';
    } else {
      return 'circle-on';
    }
  }

  color() {
    const toggle = this.state.toggle;

    if (!toggle) {
      return 'toggle-off';
    } else {
      return 'toggle-on';
    }
  }

  label() {
    const toggle = this.state.toggle;

    if (!toggle) {
      return 'OFF';
    } else {
      return 'ON';
    }
  }

  render() {

    return (
      <div className='toggle-container'>
        <div className={`toggle ${this.color()}`} onClick={this.handleClick}>
          <div className={`circle ${this.slide()}`}>

          </div>
        </div>
        <p className="label">{this.label()}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
