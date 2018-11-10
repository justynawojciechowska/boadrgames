import css from 'styled-jsx/css';

import { colors } from '../../styleVariables';

/*language=CSS*/
const GameCardStyles = css`
  .game-card {
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
  }

  .game-card__image {
    background-color: ${colors.gray};
    margin-right: 20px;
    height: 150px;
    width: 150px;
  }

  .game-card__name {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export default GameCardStyles;
