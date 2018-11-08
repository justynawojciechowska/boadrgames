import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyles from './ButtonStyles';

const Button = ({ onClick, className, children, ...props }) => {
  const styles = ButtonStyles(props);
  return (
    <button className={className} onClick={onClick}>
      {children}
      <style jsx>{styles}</style>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
