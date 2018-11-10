import React from 'react';

import PageWrapper from '../PageWrapperComponent';
import { Heading } from '../../common';

import styles from './SearchResultsStyles';

function SearchResultsComponent(props) {
  return (
    <PageWrapper>
      <style jsx>{styles}</style>
      <div className="search">
        <section className="container">Search</section>
      </div>
    </PageWrapper>
  );
}

export default SearchResultsComponent;
