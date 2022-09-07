import axios from 'axios';
import { BASE_URL, BASE_URL_DEV } from '../constants';

export default axios.create({
  baseURL: BASE_URL_DEV,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
