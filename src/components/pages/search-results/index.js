import React from 'react';
import SearchResultsContainer from './SearchResultsContainer';

import SearchResultsComponent from './SearchResultsComponent';

export default function SearchResults(props) {
  return (
    <SearchResultsContainer {...props} component={SearchResultsComponent} />
  );
}
