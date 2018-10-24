import React from 'react';

import { colors } from '../../../styleVariables';

const HomepageStyles = () => (
  /*language=CSS*/
  <style jsx>{`
    .homepage {
      height: 550px;
    }

    .homepage__hero {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
    }

    .homepage__hero-content {
      max-width: 550px;
    }

    .homepage__hero-img {
      position: absolute;
      max-height: 1000px;
      top: -150px;
      right: -50px;
      z-index: -1;
    }

    .homepage__button {
    }

    .homepage__hero-subtitle {
      font-size: 2.2rem;
      margin-bottom: 50px;
    }
  `}</style>
);

export default HomepageStyles;
