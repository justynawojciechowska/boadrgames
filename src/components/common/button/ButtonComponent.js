import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyles from './ButtonStyles';

const Button = ({ onClick, className, children, ...props }) => (
  <button className={className} onClick={onClick}>
    {children}
    <ButtonStyles {...props} />
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
