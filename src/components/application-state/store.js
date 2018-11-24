import { createStore, applyMiddleware } from 'redux';
import Account from './account';
import thunk from 'redux-thunk';

const store = createStore(Account.reducers, applyMiddleware(thunk));

export default store;
