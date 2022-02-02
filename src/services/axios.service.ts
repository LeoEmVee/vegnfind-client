const axios = require('axios').default;
// const SERVER_URL = 'https://veganfind.herokuapp.com';

axios.defaults.baseURL = 'https://veganfind.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;

export function getUserByCondition(condition: {
  [key: string]: string;
}): Promise<any> {
  return axios.post('/veggie/find', condition); // returns user or error
}

export function submitLoginForm(data: any): Promise<any> {
  return axios.post('/veggie/login', data); // returns jwt token or error
}
