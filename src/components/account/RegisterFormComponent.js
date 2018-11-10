import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Input, Button } from '../common';

function RegisterFormComponent(props) {
  return (
    <div>
      <Heading>Zarejestruj się</Heading>

      <Input addonBefore="E-mail" />
      <Input addonBefore="Hasło" />
      <Input addonBefore="Powtórz hasło" />

      <Button>Zarejestruj</Button>
    </div>
  );
}

RegisterFormComponent.propTypes = {
  className: PropTypes.string
};

export default RegisterFormComponent;
