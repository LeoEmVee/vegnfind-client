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
  return axios.post('/login', data); // returns jwt token or error
}

export function submitRegisterForm(data: any): Promise<any> {
  return axios.post('/register', data); // returns new user without password or error
}

export function validateToken(data: any): Promise<any> {
  return axios.post('/validate', data); // returns decoded token as {username:username} or null
}

export function createProduct(data: any): Promise<any> {
  return axios.post('/product/create', data); // returns new product or error
}

export function createShop(data: any): Promise<any> {
  return axios.post('/shop/create', data); // returns new shop or error
}

export function createEat(data: any): Promise<any> {
  return axios.post('/eat/create', data); // returns new restaurant or error
}

export function getCloudinaryUrl(dataString: any): Promise<any> {
  return axios.post('/cloudinary', dataString);
}

export function getSearchResults(searchOptions: any) {
  let eats: any[] = [];
  let shops: any[] = [];
  let products: any[] = [];

  axios
    .post('/eat/findall', searchOptions)
    .then((res: any) => {
      console.log('axios shops', res);
      eats.push(res);
    })
    .catch((err: any) => err);
  axios
    .post('/shop/findall', searchOptions)
    .then((res: any) => {
      console.log('axios shops', res);
      shops.push(res);
    })
    .catch((err: any) => err);
  axios
    .post('/product/findall', searchOptions)
    .then((res: any) => {
      console.log('axios products', res);
      products.push(res);
    })
    .catch((err: any) => err);

  const results = [...eats, ...shops, ...products];
  console.log('axios results', results);
  return results.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}
