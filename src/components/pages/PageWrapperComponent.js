import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation';

import styles from './PageWrapperStyles';

function PageWrapperComponent(props) {
  return (
    <main>
      <Navigation />
      <div className="page-wrapper">{props.children}</div>
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
