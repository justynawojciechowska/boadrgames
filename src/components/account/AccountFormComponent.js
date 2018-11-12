import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../common';
import LoginForm from './LoginFormComponent';
import RegisterForm from './RegisterFormComponent';

import styles from './AccountStyles';

const LOGIN_FORM = 'login';
const REGISTER_FORM = 'register';

function AccountFormComponent(props) {
  return (
    <Modal
      modalClassName="account-modal"
      visible={props.formVisible}
      onCancel={props.onHideForm}
      footer={null}
    >
      <style jsx global>
        {styles}
      </style>
      <div className="account-modal__wrapper">
        <div className="account-modal__form">
          {props.formType === LOGIN_FORM && <LoginForm />}
          {props.formType === REGISTER_FORM && <RegisterForm />}
        </div>

        <div className="account-modal__image" />
      </div>
    </Modal>
  );
}

AccountFormComponent.propTypes = {
  formVisible: PropTypes.bool.isRequired,
  formType: PropTypes.oneOf([REGISTER_FORM, LOGIN_FORM]),

  onHideForm: PropTypes.func.isRequired
};

export default AccountFormComponent;
