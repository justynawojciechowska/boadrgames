import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Input, Button } from '../common';

import styles from './RegisterStyles';

function RegisterFormComponent(props) {
  return (
    <div className="register">
      <style jsx>{styles}</style>

      <Heading>Zarejestruj się</Heading>

      <Input addonBefore="E-mail" />
      <Input addonBefore="Hasło" />
      <Input addonBefore="Powtórz hasło" />

      <div className="register__footer">
        <Button>Zarejestruj</Button>
        <p className="register__footer-text">Masz konto? Zaloguj się</p>
      </div>
    </div>
  );
}

RegisterFormComponent.propTypes = {
  className: PropTypes.string
};

export default RegisterFormComponent;
