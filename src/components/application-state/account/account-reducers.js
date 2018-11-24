import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ACCOUNT_LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './account-constants';

const initialState = {
  isLoggedIn: false,
  accountLoading: false
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, accountLoading: false };
    case LOGIN_REQUEST:
      return { ...state, accountLoading: true };
    case LOGIN_ERROR:
      return { ...state, accountLoading: false, loginError: action.error };
    case ACCOUNT_LOGOUT:
      return { ...state, isLoggedIn: false };
    case REGISTER_REQUEST:
      return { ...state, accountLoading: true };
    case REGISTER_SUCCESS:
      return { ...state, isUserRegistered: true, accountLoading: false };
    case REGISTER_ERROR:
      return { ...state, accountLoading: false, registerError: action.error };
    default:
      return state;
  }
};

export default accountReducer;
