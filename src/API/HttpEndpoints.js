export default class HttpEndpoints {
  httpClient = null;

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  /**
   * [Values]{@link http://localhost:5000/api/values}
   */
  getValues = (requestOpts = {}) =>
    this.httpClient.get('/values/', requestOpts);

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
