import React from 'react';
import { colors } from '../../../styleVariables';
import css from 'styled-jsx/css';

const DatePickerLoaderStyles = props => {
  return (
    /*language=CSS*/
    css`
      .date-picker-loader {
        border: 2px solid ${colors.gray};
        border-radius: 44px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 44px;
        padding-left: 10px;
        width: 250px;
      }
    `
  );
};

export default DatePickerLoaderStyles;
