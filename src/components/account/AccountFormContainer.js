import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { account } from '../application-state';

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  accountLoading: state.accountLoading
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) =>
    dispatch(account.actions.login(username, password)),
  restoreSession: () => dispatch(account.actions.restoreSession())
});

class AccountFormContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,

    login: PropTypes.func.isRequired,
    restoreSession: PropTypes.func.isRequired,
    onHideForm: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: ''
  };

  componentDidMount() {
    this.props.restoreSession();
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.onHideForm();
    }
  }

  handleLogin = async () => {
    this.props.login(this.state.username, this.state.password);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountFormContainer);
