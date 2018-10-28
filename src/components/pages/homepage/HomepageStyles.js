import React from 'react';

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
      height: calc(100vh - 100px);
      min-height: 500px;
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

    .homepage__hero-subtitle {
      font-size: 2.2rem;
      margin-bottom: 50px;
    }

    .homepage__search {
      height: 500px;
      padding: 100px 0;
    }

    .homepage__subtitle {
      text-align: center;
      width: 100%;
    }

    .homepage__search-inputs {
      text-align: center;
    }
  `}</style>
);

export default HomepageStyles;
