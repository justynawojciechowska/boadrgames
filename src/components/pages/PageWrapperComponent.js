import React from 'react';
import PropTypes from 'prop-types';

import PageWrapperStyles from './PageWrapperStyles';

function PageWrapperComponent(props) {
  return (
    <div>
      <PageWrapperStyles />
      {props.children}
    </div>
  );
}

PageWrapperComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapperComponent;
