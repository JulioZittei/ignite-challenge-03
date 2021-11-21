import axios from 'axios';

const env =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://ignite-challenge-03.netlify.app/api';

export const api = axios.create({
  baseURL: `${env}`,
});
