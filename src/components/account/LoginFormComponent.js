import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Input, Button } from '../common';

function LoginFormComponent(props) {
  return (
    <div>
      <Heading>Zaloguj się</Heading>

      <Input addonBefore="E-mail" />
      <Input addonBefore="Hasło" />

      <Button>Zaloguj</Button>
    </div>
  );
}

LoginFormComponent.propTypes = {
  className: PropTypes.string
};

export default LoginFormComponent;
