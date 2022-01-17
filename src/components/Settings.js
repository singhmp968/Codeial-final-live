import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name, // inital name
      password: '',
      confirmPasswrod: '',
      editMode: false,
    };
  }
  handleChange = (fieldName, val) => {
    // here we will pass the string like this name,and vale
    this.setState({
      [fieldName]: val, //this is exactly what we have in state
    });
  };
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
        </div>
        <div className="field">
          <div className="field">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>
        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">confirm Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPasswrod', e.target.value)
              }
              value={this.state.confirmPasswrod}
            />
          </div>
        )}
        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit Profile
            </button>
          )}
          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              GO Back
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
