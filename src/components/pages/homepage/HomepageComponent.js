import React from 'react';
import PropTypes from 'prop-types';

import HomepageStyles from './HomepageStyles';
import PageWrapper from '../PageWrapperComponent';
import { Button } from '../../common';

function HomepageComponent(props) {
  return (
    <PageWrapper>
      <HomepageStyles />
      <p>Strona główna</p>
      <Button>Hello</Button>
    </PageWrapper>
  );
}

HomepageComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomepageComponent;
