import React, { Component } from 'react';
// here in this login component we lare using un controllerd component method to login into te form
// and in the uncontrolled we have to create the referennce to to pass thevalues
class Login extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef(); //
    this.passwordInputRef = React.createRef();
  }
  // here we are handling the submit action
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('this.emailInputref', this.emailInputRef);
    console.log('this.passwordInputRef', this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            ref={this.emailInputRef}
            required
          />
        </div>
        <div className="field">
          <input
            ref={this.passwordInputRef}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
