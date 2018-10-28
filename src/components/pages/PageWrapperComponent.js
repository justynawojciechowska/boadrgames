import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation';

import PageWrapperStyles from './PageWrapperStyles';

function PageWrapperComponent(props) {
  return (
    <main>
      <PageWrapperStyles />
      <Navigation />
      <div>{props.children}</div>
    </main>
  );
}

PageWrapperComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapperComponent;
