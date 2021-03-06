import css from 'styled-jsx/css';

import { font } from '../../styleVariables';

/*language=CSS*/
const PageWrapperStyles = css.global`
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
    
    .page-wrapper {
      padding-top: 100px;
    }
  `;

export default PageWrapperStyles;
