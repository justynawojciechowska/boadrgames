import React from 'react';
import PropTypes from 'prop-types';

import ContactStyles from './ContactStyles';
import PageWrapper from './PageWrapperComponent';

function ContactComponent(props) {
  return (
    <PageWrapper>
      <ContactStyles />
      <p>Contact</p>
    </PageWrapper>
  );
}

ContactComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContactComponent;
