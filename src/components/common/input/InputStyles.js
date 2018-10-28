import React from 'react';
import { colors } from '../../../styleVariables';

const InputStyles = props => {
  return (
    /*language=CSS*/
    <style jsx>{`
      .input__wrapper {
        margin-bottom: 10px;
      }

      .input__wrapper .ant-input,
      .input:not(.ant-input-affix-wrapper) {
        border-radius: 44px;
        border: 2px solid ${colors.gray};
        font-size: 1.4rem;
        height: 44px;
        padding: 0 20px;
      }

      .input__wrapper .ant-input,
      .input:focus {
        outline: none;
      }

      .input {
        position: relative;
      }

      .input .ant-input-suffix {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }

      .input .ant-input-suffix svg {
        color: ${colors.gray};
        height: auto;
        width: 20px;
      }
    `}</style>
  );
};

export default InputStyles;
