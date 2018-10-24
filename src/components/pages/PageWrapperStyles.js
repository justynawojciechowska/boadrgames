import React from 'react';
import { font } from '../../styleVariables';

const PageWrapperStyles = () => (
  /*language=CSS*/
  <style jsx>{`
    * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${font.family};
      font-size: 1.4rem;
      color: ${font.color};
    }

    h1 {
      font-size: 5rem;
      font-weight: 600;
      line-height: 1.3;
    }

    h2 {
      font-size: 3rem;
      font-weight: normal;
    }

    h2 {
      font-size: 2.4rem;
    }

    p {
      margin: 0 0 5px 0;
      line-height: 1.4;
    }

    a {
      color: ${font.color};
      text-decoration: none;
    }

    ul {
      margin: 0;
      list-style: none;
    }

    .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 20px;
    }
  `}</style>
);

export default PageWrapperStyles;
