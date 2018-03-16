import md5 from 'crypto-js/md5';
import axios from 'axios';
import { API_URL, API_KEY, PRIV_KEY, TIMESTAMP } from '../config/constants';

const API = axios.create({
  baseURL: API_URL
});

const API_HASH = md5(TIMESTAMP + PRIV_KEY + API_KEY);
const AUTH_PARAMS = `&apikey=${API_KEY}&ts=${TIMESTAMP}&hash=${API_HASH}`;

const MAGAZINES_ENDPOINT = '/comics';

export default {
  magazines: (data) => {
    const { title, year, page } = data || { title: '', year: '', page: 0 };
    let params = '';

    if (title) params += `&titleStartsWith=${title}`;
    if (year) params += `&startYear=${year}`;
    if (page) params += `&offset=${10 * page}`;

    return API.get(`${MAGAZINES_ENDPOINT}?format=comic&orderBy=title&limit=10${params}${AUTH_PARAMS}`);
  }
};
