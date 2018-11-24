import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { HomePage, SearchResults } from './components/pages';
import { store } from './components/application-state';

import 'normalize.css';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search-results" component={SearchResults} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
