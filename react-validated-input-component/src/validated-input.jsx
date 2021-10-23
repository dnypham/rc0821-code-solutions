import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  getIconColor() {
    const password = this.state.password;

    if (password.length < 8 || !password.includes('!')) {
      return 'i-invalid';
    } else {
      return 'i-valid';
    }
  }

  getIcon() {
    const password = this.state.password;

    if (password.length < 8 || !password.includes('!')) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  getValidateText() {
    const password = this.state.password;

    if (password === '') {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
    } else if (password.includes('!') || password.includes('@') || password.includes('?')) {
      return '';
    } else {
      return 'Your password needs to include a special character. (!, @, ?)';
    }
  }

  render() {
    console.log(this.state.password);

    return (
      <label>
        Password
        <div>
        <input
        name='password'
        value={this.state.password}
        type="password"
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        />
          <i id={this.getIconColor()} className={this.getIcon()}></i>
          <p>{this.getValidateText()}</p>
        </div>
      </label>
    );
  }
}

export default ValidatedInput;
