import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../common';
import LoginForm from './LoginFormComponent';
import RegisterForm from './RegisterFormComponent';

const LOGIN_FORM = 'login';
const REGISTER_FORM = 'register';

function AccountFormComponent(props) {
  return (
    <Modal
      visible={props.formVisible}
      onCancel={props.onHideForm}
      footer={null}
    >
      {props.formType === LOGIN_FORM && <LoginForm />}
      {props.formType === REGISTER_FORM && <RegisterForm />}
    </Modal>
  );
}

AccountFormComponent.propTypes = {
  formVisible: PropTypes.bool.isRequired,
  formType: PropTypes.oneOf([REGISTER_FORM, LOGIN_FORM]),

  onHideForm: PropTypes.func.isRequired
};

export default AccountFormComponent;
