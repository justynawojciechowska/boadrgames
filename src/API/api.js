import axios from 'axios';

export default class HTTPClient {
  client = null;
  authToken = null;

  constructor(baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  setAuthToken = token => {
    this.authToken = token;
  };
}
