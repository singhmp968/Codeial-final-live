//step: for comtrolled componenets
//1.create state in the constructor and assign the property of satte  this.state = {name: '',}
//2.create a handler for the property like this  handleNameChange = (e) => this.setState({name: e.target.value,});    };
//3. in the input tag  <input placeholder="Name" type="text" placeholder="Name" required onChange={this.handleNameChange} value={this.state.name}          //ref={this.name}/>
//4.here in the above we have add addChnge and value in the input tag
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSingup, signup } from '../actions/auth';
class Signup extends Component {
  // implementation using comtroll comp
  constructor(props) {
    super(props);
    /*
this.name = React.createRef();
this.email = React.createRef();
this.confirmPassword = React.createRef();
this.password = React.createRef();*/
    this.state = {
      name: '',
      email: '',
      cnfPass: '',
      password: '',
    };
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleCnfPasswordChange = (e) => {
    this.setState({
      cnfPass: e.target.value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault(); /*
console.log('name', this.name);
console.log('email', this.email);
console.log('confirm password', this.confirmPassword);
console.log('password', this.password);*/
    const { email, password, cnfPass, name } = this.state;
    // we only have to dispatch acton only when we have email name password and cnf password
    if (email && password && cnfPass && name) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, cnfPass, name));
    }
    console.log(this.state);
  };
  render() {
    const { inProgress, error } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            placeholder="Name"
            required
            onChange={this.handleNameChange}
            value={this.state.name}
            //ref={this.name}
          />
        </div>
        <div className="field">
          <input
            placeholder="email"
            type="email"
            // required ref={this.email}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm Password"
            required
            type="password"
            //   ref={this.confirmPassword}
            onChange={this.handleCnfPasswordChange}
            value={this.state.cnfPass}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            required
            type="password"
            // ref={this.password}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Signup
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
