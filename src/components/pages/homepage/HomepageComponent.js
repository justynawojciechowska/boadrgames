import React from 'react';

import PageWrapper from '../PageWrapperComponent';
import { Heading } from '../../common';
import SearchBox from '../../search-box';

import homepageHero from './assets/hero2.jpg';

import HomepageStyles from './HomepageStyles';

function HomepageComponent(props) {
  const styles = HomepageStyles();

  return (
    <PageWrapper>
      <style jsx>{styles}</style>
      <div className="homepage">
        <section className="container homepage__hero">
          <div className="homepage__hero-content">
            <Heading as="h1">Zagraj ze mną</Heading>
            <p className="homepage__hero-subtitle">
              Pierwszy portal łączący miłośników gier planszowych
            </p>
            <SearchBox />
          </div>

          <img className="homepage__hero-img" src={homepageHero} alt="Hero" />
        </section>
      </div>
    </PageWrapper>
  );
}

export default HomepageComponent;
