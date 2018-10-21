import React from 'react';
import { colors } from '../../../styleVariables';

const ButtonStyles = props => {
  return (
    /*language=CSS*/
    <style jsx>{`
      button {
        background-color: ${colors.primary};
        border: 2px solid ${colors.primary};
        border-radius: 25px;
        color: ${colors.white};
        height: 40px;
        width: 200px;
        transition: background-color 0.2s, color 0.2s;
      }

      button:focus {
        outline: none;
      }

      button:hover {
        cursor: pointer;
        background-color: transparent;
        color: ${colors.primary};
      }

      .btn-white {
        background-color: ${colors.white};
        border: 2px solid ${colors.gray};
        color: ${colors.gray};
      }

      .btn-white:hover {
        background-color: ${colors.gray};
        color: ${colors.white};
      }

      .btn-reverse {
        background-color: transparent;
        border: 2px solid ${colors.primary};
        color: ${colors.primary};
      }

      .btn-reverse:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
      }
    `}</style>
  );
};

export default ButtonStyles;
