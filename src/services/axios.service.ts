const axios = require('axios').default;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
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

export function createProduct(data: any): Promise<any> {
  return axios.post('/product/create', data); // returns new product or error
}

export function getCloudinaryUrl(dataString: string): Promise<any> {
  return axios.post('/cloudinary', dataString);
}
