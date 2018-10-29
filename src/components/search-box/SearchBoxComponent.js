import React from 'react';

import { Button, Input, DatePicker } from '../common';

import SearchBoxStyles from './SearchBoxStyles';

function SearchBoxComponent(props) {
  return (
    <div className="search-box">
      <SearchBoxStyles />
      <p className="search-box__title">Wyszukaj rozgrywki w Twojej okolicy</p>
      <Input component={Input.Search} addonBefore="Nazwa gry" />
      <Input addonBefore="Miasto" />
      <div>
        <p>Data</p>
        <DatePicker className="search-box__date-picker" />
      </div>
      <Button className="button-big search-box__button">Szukaj</Button>
    </div>
  );
}

export default SearchBoxComponent;