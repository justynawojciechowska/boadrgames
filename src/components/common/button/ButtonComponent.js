import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ButtonStyles';

const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button className={classnames('button', className)} onClick={onClick}>
      {children}
      <style jsx>{styles}</style>
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
