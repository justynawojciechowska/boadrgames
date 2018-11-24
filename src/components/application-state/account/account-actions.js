import LocalStorage from '../../../LocalStorage';
import * as API from '../../../API';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  ACCOUNT_LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './account-constants';

function loginRequest() {
  return { type: LOGIN_REQUEST };
}
function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}
function loginFailure(error) {
  return { type: LOGIN_ERROR, error };
}
function logoutSuccess() {
  return { type: ACCOUNT_LOGOUT };
}

function registerRequest() {
  return { type: REGISTER_REQUEST };
}
function registerSuccess() {
  return { type: REGISTER_SUCCESS };
}
function registerFailure(error) {
  return { type: REGISTER_ERROR, error };
}

export function login(username, password) {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      const response = await API.login({
        username,
        password
      });

      const token = response.data.token;

      LocalStorage.setValue('auth', token);
      API.httpClient.setAuthToken(token);

      dispatch(loginSuccess());
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error));
    }
  };
}

export function restoreSession() {
  return dispatch => {
    const token = LocalStorage.getValue('auth', false);

    if (token) {
      dispatch(loginSuccess());
      API.httpClient.setAuthToken(token);
    }
  };
}

export const logout = () => {
  return dispatch => {
    LocalStorage.removeItem('auth');
    dispatch(logoutSuccess());
    API.httpClient.setAuthToken(null);
  };
};

export const register = ({ firstName, lastName, email, password }) => {
  return async dispatch => {
    dispatch(registerRequest());

    try {
      const response = await API.register({
        firstName,
        lastName,
        email,
        password
      });

      const token = response.data.token;

      LocalStorage.setValue('auth', token);
      API.httpClient.setAuthToken(token);

      dispatch(registerSuccess());
    } catch (error) {
      console.log(error);
      dispatch(registerFailure(error));
    }
  };
};
