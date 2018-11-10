import React from 'react';
import css from 'styled-jsx/css';

import { border } from '../../styleVariables';

const SearchBoxStyles = props => {
  return (
    /*language=CSS*/
    css`
      .search-box {
        background-color: #efefef;
        box-shadow: 5px 5px 60px 10px rgba(179, 179, 179, 0.2);
        border-radius: ${border.medium};
        padding: 40px;
        width: 360px;
      }

      .search-box .input,
      .search-box .ant-input {
        display: block;
        width: 100%;
      }

      .search-box__title {
        font-size: 1.6rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
      }

      .search-box__button {
        margin: 40px auto 0;
        text-align: center;
      }

      .search-box .search-box__date-picker {
        width: 100%;
      }
    `
  );
};

export default SearchBoxStyles;
