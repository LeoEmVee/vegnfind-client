const axios = require('axios').default;
const SERVER_URL = 'https://veganfind.herokuapp.com';

export function getUserByCondition(condition: {
  [key: string]: string;
}): Promise<any> {
  return axios.post(`${SERVER_URL}/veggie/find`, condition); // returns user or error
}

export function submitLoginForm(data: any): Promise<any> {
  return axios.post(`${SERVER_URL}/veggie/login`, data); // returns jwt token or error
}
