import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Button, Input, DatePicker } from '../common';

import SearchBoxStyles from './SearchBoxStyles';

function SearchBoxComponent(props) {
  const styles = SearchBoxStyles();

  if (props.redirect) {
    return <Redirect to={props.redirect} />;
  }

  return (
    <div className="search-box">
      <style jsx>{styles}</style>
      <p className="search-box__title">Wyszukaj rozgrywki w Twojej okolicy</p>
      <Input
        addonBefore="Nazwa gry"
        onChange={event => props.onInputChange(event, 'game')}
      />
      <Input
        addonBefore="Miasto"
        onChange={event => props.onInputChange(event, 'city')}
      />
      <div>
        <p>Data</p>
        <DatePicker
          className="search-box__date-picker"
          onChange={props.onDateChange}
        />
      </div>
      <div className="search-box__button">
        <Button onClick={props.onSearch} big>
          Szukaj
        </Button>
      </div>
    </div>
  );
}

SearchBoxComponent.propTypes = {
  redirect: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
  onSearch: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired
};

export default SearchBoxComponent;
