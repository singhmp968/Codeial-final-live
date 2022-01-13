// for uncontrolled comp
//1.creatre constrocutor
//2. declare valriable like this   this.name = React.createRef();
// 3. inthe input tag using ref do like this ref={this.name}
//4.in the submit call the handleFormFunction using like this this.handleFormFunction
import React, { Component } from 'react';

class Signup extends Component {
  // implementation using comtroll comp
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.confirmPassword = React.createRef();
    this.password = React.createRef();
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('name', this.name);
    console.log('email', this.email);
    console.log('confirm password', this.confirmPassword);
    console.log('password', this.password);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header"></span>
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            placeholder="Name"
            required
            ref={this.name}
          />
        </div>
        <div className="field">
          <input placeholder="email" type="email" required ref={this.email} />
        </div>
        <div className="field">
          <input
            placeholder="Confirm Password"
            required
            type="password"
            ref={this.confirmPassword}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            required
            type="password"
            ref={this.password}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}> Signup </button>
        </div>
      </form>
    );
  }
}

export default Signup;
