import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import HeadingStyles from './HeadingStyles';

const HeadingComponent = props => {
  const { as: Component, children, className, ...rest } = props;
  const styles = HeadingStyles();

  return (
    <div>
      <style jsx>{styles}</style>
      <Component className={classnames('heading', className)} {...rest}>
        {children}
      </Component>
    </div>
  );
};

HeadingComponent.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string
};

HeadingComponent.defaultProps = {
  as: 'h2'
};

export default HeadingComponent;
