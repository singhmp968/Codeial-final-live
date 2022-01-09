import React, { Component } from 'react';
// here in this login component we lare using un controllerd component method to login into te form
// and in the uncontrolled we have to create the referennce to to pass thevalues
class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef(); //
    // this.passwordInputRef = React.createRef();
    /********conveting to control component */
    this.state = {
      email: '',
      password: '',
    };
  }
  // controlled way
  hadleEmailChange = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  // controlled way
  hadlePasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  // here we are handling the submit action
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputref', this.emailInputRef);
    // console.log('this.passwordInputRef', this.passwordInputRef);
    console.log('this . state is', this.state);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            // for un controlled way
            // ref={this.emailInputRef}
            required
            // for controlled
            onChange={this.hadleEmailChange}
            value={this.state.email}
            // for controlled
          />
        </div>
        <div className="field">
          <input
            //  ref={this.passwordInputRef} // here we are using the password change using uncontrolled way
            onChange={this.hadlePasswordChange} // this is wasy by which we are handling the email and password dtn th econtrolled way
            value={this.state.password}
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
