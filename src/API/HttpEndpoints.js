export default class HttpEndpoints {
  httpClient = null;

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  /**
   * [User]{@link http://localhost:5000/api/user}
   */
  login = (opts, requestOpts = {}) =>
    this.httpClient.post('/users/login/', opts, requestOpts);

  register = (opts, requestOpts = {}) =>
    this.httpClient.post('/users/register/', opts, requestOpts);

  /**
   * [Games]{@link http://localhost:5000/api/games}
   */
  getAllGames = (requestOpts = {}) =>
    this.httpClient.get('/games/', requestOpts);

  getGames = (params, requestOpts = {}) =>
    this.httpClient.get(`/games/`, {
      ...requestOpts,
      params
    });

  getGame = ({ id }, requestOpts = {}) =>
    this.httpClient.get(`/games/${id}`, {
      ...requestOpts
    });
}
