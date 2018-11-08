import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation';

import PageWrapperStyles from './PageWrapperStyles';

function PageWrapperComponent(props) {
  const styles = PageWrapperStyles();

  return (
    <main>
      <Navigation />
      <div>{props.children}</div>
      <style jsx global>
        {styles}
      </style>
    </main>
  );
}

PageWrapperComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapperComponent;
