import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Input, Button } from '../common';

import styles from './LoginStyles';

function LoginFormComponent(props) {
  return (
    <div className="login">
      <style jsx>{styles}</style>
      <Heading>Zaloguj się</Heading>

      <Input addonBefore="E-mail" />
      <Input addonBefore="Hasło" />
      <p>Przypomnij hasło</p>

      <div className="login__footer">
        <Button className="login__button">Zaloguj się</Button>
        <p className="login__footer-text">Nie masz konta? Zarejestruj się</p>
      </div>
    </div>
  );
}

LoginFormComponent.propTypes = {
  className: PropTypes.string
};

export default LoginFormComponent;
