import React from 'react';

import PageWrapper from '../PageWrapperComponent';
import { Button, Input, Heading } from '../../common';

import homepageHero from './assets/hero2.jpg';

import HomepageStyles from './HomepageStyles';

function HomepageComponent(props) {
  return (
    <PageWrapper>
      <HomepageStyles />
      <div className="homepage">
        <section className="container homepage__hero">
          <div className="homepage__hero-content">
            <Heading as="h1">
              Zagraj ze mną <br /> łączymy miłośników gier planszowych
            </Heading>
            <p className="homepage__hero-subtitle">
              Portal dla miłośników gier planszowych
              <br />
              Umawiaj się, graj, poznawaj
            </p>
            <Button className="homepage__button button-big">
              Wyszukaj gry
            </Button>
          </div>

          <img className="homepage__hero-img" src={homepageHero} alt="Hero" />
        </section>

        <section className="homepage__search">
          <Heading as="h2" className="homepage__subtitle">
            Wyszukaj
          </Heading>
          <div className="homepage__search-inputs">
            <Input component={Input.Search} />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default HomepageComponent;
