import axios from 'axios';
import { BASE_URL } from '../constants';

export default axios.create({
  baseURL: 'http://localhost:8800', //BASE_URL,
});
