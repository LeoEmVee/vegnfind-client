import { config } from '../config';
const serverUrl = config.SERVER_URL;

function fetchRequest(url: string, options: any) {
  return fetch(url, options)
    .then(res => (res.status < 400 ? res : Promise.reject()))
    .then(res => (res.status !== 204 ? res.json() : res))
    .catch(err => {
      console.log('Error:', err);
    });
}

export function getUserByCondition(keyword: string) {
  const body = { username: keyword };
  return fetchRequest(`${serverUrl}/veggie/find`, {
    method: 'POST',
    headers: {},
    body: JSON.stringify(body),
  });
}
