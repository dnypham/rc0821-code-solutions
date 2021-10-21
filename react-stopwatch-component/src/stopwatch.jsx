import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      seconds: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleToggle() {

    if (!this.state.toggle) {
      this.setState({ toggle: true });
      this.time = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      this.setState({ toggle: false });
      clearInterval(this.time);
    }
  }

  handleReset() {
    if (!this.state.toggle) {
      this.setState({ seconds: 0 });
    }
  }

  toggle() {
    const toggle = this.state.toggle;

    return (!toggle ? 'fas fa-play fa-3x' : 'fas fa-pause fa-3x');
  }

  seconds() {
    const seconds = this.state.seconds;

    return seconds;
  }

  render() {

    return (
      <div className="stopwatch-container">
        <div className="row">
          <div className="column">
            <div className="circle" onClick={this.handleReset}>
              <h1 className="time noselect">{this.seconds()}</h1>
            </div>
            <div className="icon">
              <i className={this.toggle()} onClick={this.handleToggle}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
