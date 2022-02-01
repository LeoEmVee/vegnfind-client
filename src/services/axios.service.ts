const axios = require('axios').default;
const SERVER_URL = 'https://veganfind.herokuapp.com';

export function getUserByCondition(condition: any): Promise<any> {
  return axios.post(`${SERVER_URL}/veggie/find`, condition);
}
