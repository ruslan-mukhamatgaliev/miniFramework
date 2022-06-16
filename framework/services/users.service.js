import fetch from 'node-fetch';
import { token, urls } from '../config/index';

/*
* @param { get } Получить список пользователей
* @param {object} Создание пользователя
 */
const Tests = {
  get: async (params) => {
    const r = await fetch(`${urls.mailChecker}${params}`, { method: 'GET', headers: { apikey: token.tokenValid } });
    return r;
  },
  getBadToken: async (params) => {
    const r = await fetch(`${urls.mailChecker}${params}`, { method: 'GET', headers: { apikey: token.tokenInvalid } });
    return r;
  },
};

export default Tests;
