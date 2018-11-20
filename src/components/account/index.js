import React from 'react';
import AccountFormContainer from './AccountFormContainer';

import AccountFormComponent from './AccountFormComponent';

export default function Account(props) {
  return <AccountFormContainer {...props} component={AccountFormComponent} />;
}
