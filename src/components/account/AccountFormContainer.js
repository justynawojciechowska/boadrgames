import React from 'react';
import PropTypes from 'prop-types';
import * as API from '../../API';

class AccountFormContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: ''
  };

  handleLogin = async () => {
    try {
      const response = await API.login({
        username: this.state.username,
        password: this.state.password
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleUsernameChange = value => this.setState({ username: value });

  handlePasswordChange = value => this.setState({ password: value });

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Component
        {...rest}
        {...this.state}
        onLogin={this.handleLogin}
        onUsernameChange={this.handleUsernameChange}
        onPasswordChange={this.handlePasswordChange}
      />
    );
  }
}

export default AccountFormContainer;
