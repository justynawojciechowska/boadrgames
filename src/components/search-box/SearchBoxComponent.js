import React from 'react';

import { Button, Input, DatePicker } from '../common';

import SearchBoxStyles from './SearchBoxStyles';

function SearchBoxComponent(props) {
  const styles = SearchBoxStyles();

  return (
    <div className="search-box">
      <style jsx>{styles}</style>
      <p className="search-box__title">Wyszukaj rozgrywki w Twojej okolicy</p>
      <Input addonBefore="Nazwa gry" />
      <Input addonBefore="Miasto" />
      <div>
        <p>Data</p>
        <DatePicker className="search-box__date-picker" />
      </div>
      <div className="search-box__button">
        <Button big>Szukaj</Button>
      </div>
    </div>
  );
}

export default SearchBoxComponent;
