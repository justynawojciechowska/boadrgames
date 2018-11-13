import axios from 'axios';

const { REACT_APP_HTTP_API_URL } = process.env;

export default axios.create({
  baseURL: REACT_APP_HTTP_API_URL
});
