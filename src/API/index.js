import HttpClient from './api';
import HttpEndpoints from './HttpEndpoints';

const { REACT_APP_HTTP_API_URL } = process.env;

export const httpClient = new HttpClient(REACT_APP_HTTP_API_URL);
export const {
  login,
  register,

  getAllGames,
  getGames,
  getGame
} = new HttpEndpoints(httpClient.client);
