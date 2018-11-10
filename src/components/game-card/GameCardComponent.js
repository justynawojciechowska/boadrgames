import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameCardStyles';

function GameCardComponent(props) {
  return (
    <div className="game-card">
      <style jsx>{styles}</style>

      <div className="game-card__image" />
      <div>
        <p className="game-card__name">{props.game.name}</p>
        <p>
          {props.game.hour} {props.game.date}
        </p>
        <p>{props.game.address}</p>
        <p>{props.game.city}</p>
      </div>
    </div>
  );
}

GameCardComponent.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    host: PropTypes.string
  }).isRequired
};

export default GameCardComponent;
