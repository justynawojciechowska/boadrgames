import React from 'react';
import { colors } from '../../../styleVariables';

const InputStyles = props => {
  return (
    /*language=CSS*/
    <style jsx>{`
      h1.heading {
        font-size: 5rem;
        font-weight: 600;
        line-height: 1.3;
      }

      h2.heading {
        font-size: 3rem;
        font-weight: normal;
      }

      h3.heading {
        font-size: 2.4rem;
      }

      h4.heading {
        font-size: 2rem;
      }

      .heading.white {
        color: ${colors.white};
      }
    `}</style>
  );
};

export default InputStyles;
