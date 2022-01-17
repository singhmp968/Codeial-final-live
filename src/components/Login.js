import React, { Component } from 'react';
import { clearAuthState, login } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
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
    // handling the input comming form teh data
    const { email, password } = this.state;
    // we only dispatch action only if we have email and password
    if (email && password) {
      // here we are dispatching teh action
      // here we don't have connection of login to store there fore we have to made a connection to store and can be done using store
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (isLoggedin) {
      return <Redirect to={from} />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}
// creating using connect function
function mapStateToProps(state) {
  // here we are mapping the state to props
  return {
    // here we are returning the auth state
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
