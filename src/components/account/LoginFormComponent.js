import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Input, Button } from '../common';

import styles from './LoginStyles';

function LoginFormComponent(props) {
  return (
    <div className="login">
      <style jsx>{styles}</style>
      <Heading>Zaloguj się</Heading>

      <form
        onSubmit={event => {
          event.preventDefault();
          props.onLogin();
        }}
      >
        <Input
          addonBefore="Username"
          onChange={event => props.onUsernameChange(event.target.value)}
          value={props.username}
        />
        <Input
          addonBefore="Hasło"
          onChange={event => props.onPasswordChange(event.target.value)}
          value={props.password}
          type="password"
        />
        <p>Przypomnij hasło</p>

        <div className="login__footer">
          <Button type="submit" className="login__button">
            Zaloguj się
          </Button>
          <p className="login__footer-text">Nie masz konta? Zarejestruj się</p>
        </div>
      </form>
    </div>
  );
}

LoginFormComponent.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,

  onLogin: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired
};

export default LoginFormComponent;
