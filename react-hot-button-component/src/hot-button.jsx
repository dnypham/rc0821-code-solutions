import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState({ clicks: clicks + 1 });
  }
}
