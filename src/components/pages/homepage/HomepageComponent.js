import React from 'react';

import PageWrapper from '../PageWrapperComponent';
import { Button } from '../../common';

import homepageHero from './assets/hero2.jpg';

import HomepageStyles from './HomepageStyles';

function HomepageComponent(props) {
  return (
    <PageWrapper>
      <HomepageStyles />
      <div className="homepage">
        <div className="homepage__hero">
          <div className="homepage__hero-content">
            <h1>
              Zagraj ze mną <br /> łączymy miłośników gier planszowych
            </h1>
            <p className="homepage__hero-subtitle">
              Portal dla miłośników gier planszowych
              <br />
              Umawiaj się, graj, poznawaj
            </p>
            <Button className="homepage__button button-big">
              Wyszukaj gry
            </Button>
          </div>

          <img className="homepage__hero-img" src={homepageHero} alt="" />
        </div>
      </div>
    </PageWrapper>
  );
}

export default HomepageComponent;
