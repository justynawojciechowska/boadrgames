import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, SearchResults } from './components/pages';

import 'normalize.css';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search-results" component={SearchResults} />
    </Switch>
  </BrowserRouter>
);
