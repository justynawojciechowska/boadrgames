import HttpClient from './api';
import HttpEndpoints from './HttpEndpoints';

export const {
  getValues,

  getAllGames,
  getGames,
  getGame
} = new HttpEndpoints(HttpClient);
