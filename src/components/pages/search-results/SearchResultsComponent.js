import React from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../PageWrapperComponent';
import SearchBox from '../../search-box';
import GameCard from '../../game-card';

import styles from './SearchResultsStyles';

function SearchResultsComponent(props) {
  return (
    <PageWrapper>
      <style jsx>{styles}</style>
      <div className="search">
        <section className="container">
          <div className="search__wrapper">
            <div className="search__box">
              <SearchBox />
            </div>

            <div className="search__results">
              {props.gameList.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

SearchResultsComponent.propTypes = {
  gameList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
      hour: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      host: PropTypes.string
    })
  )
};

SearchResultsComponent.defaultProps = {
  gameList: [
    {
      id: 1,
      name: '7 cudów świata',
      image: '',
      date: '10-11-2018',
      hour: '20:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    },
    {
      id: 2,
      name: 'Osadnicy z Catanu',
      image: '',
      date: '10-11-2018',
      hour: '21:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    },
    {
      id: 3,
      name: '7 cudów świata',
      image: '',
      date: '10-11-2018',
      hour: '20:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    },
    {
      id: 4,
      name: 'Osadnicy z Catanu',
      image: '',
      date: '10-11-2018',
      hour: '21:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    },
    {
      id: 5,
      name: '7 cudów świata',
      image: '',
      date: '10-11-2018',
      hour: '20:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    },
    {
      id: 6,
      name: 'Osadnicy z Catanu',
      image: '',
      date: '10-11-2018',
      hour: '21:00',
      address: 'ul. Poznańska 1',
      city: 'Poznań'
    }
  ]
};

export default SearchResultsComponent;
