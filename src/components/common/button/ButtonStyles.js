import css from 'styled-jsx/css';

import { colors } from '../../../styleVariables';

/*language=CSS*/
const buttonStyles = css`
  button,
  .button {
    background-color: ${colors.primary};
    background-image: linear-gradient(
      294deg,
      ${colors.primary_dk},
      ${colors.primary}
    );
    border-radius: 25px;
    border: none;
    display: inline-block;
    font-size: 1.5rem;
    color: ${colors.white};
    height: 44px;
    line-height: 44px;
    padding: 0 35px;
    transition: background-color 0.2s, color 0.2s;
    text-align: center;
  }

  button:focus,
  .button:focus {
    outline: none;
  }

  button:hover,
  .button:hover {
    cursor: pointer;
  }

  .button-reverse {
    background: transparent;
    border: 2px solid ${colors.primary};
    line-height: 40px;
    color: ${colors.primary};
  }

  .button-reverse:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }

  .button-big {
    width: 180px;
  }

  .button-small {
    font-size: 1.3rem;
    padding: 0 15px;
  }
`;

export default buttonStyles;
