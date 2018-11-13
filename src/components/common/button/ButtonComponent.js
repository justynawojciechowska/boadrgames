import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ButtonStyles';

const Button = ({ className, children, big, ...props }) => {
  return (
    <button className={classnames('button', className)} {...props}>
      {children}
      <style jsx>{styles}</style>
      {/*language=CSS*/}
      <style jsx>
        {`
          button {
            width: ${big ? '180px' : 'auto'};
          }
        `}
      </style>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  big: PropTypes.bool
};

export default Button;
