import React from 'react';
import SearchBoxContainer from './SearchBoxContainer';

import SearchBoxComponent from './SearchBoxComponent';

export default function SearchBox(props) {
  return <SearchBoxContainer {...props} component={SearchBoxComponent} />;
}
