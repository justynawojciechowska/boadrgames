import React from 'react';
import PropTypes from 'prop-types';

import buttonStyles from './ButtonStyles';

const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
      <style jsx>{buttonStyles}</style>
      {/*language=CSS*/}
      <style jsx>
        {`
          button {
            width: ${props.big ? '180px' : 'auto'};
          }
        `}
      </style>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
