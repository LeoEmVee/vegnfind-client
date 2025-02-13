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

export function createReview(review: any): Promise<any> {
  return axios.post('/review/create', review); // returns new review or error
}

export function getCloudinaryUrl(dataString: any): Promise<any> {
  return axios.post('/cloudinary', dataString);
}

export function getEatsSearchResults(searchOptions: any) {
  return axios.post('/eat/findall', searchOptions);
}

export function getShopsSearchResults(searchOptions: any) {
  return axios.post('/shop/findall', searchOptions);
}

export function getProductsSearchResults(searchOptions: any) {
  return axios.post('/product/findall', searchOptions);
}

export function getFavourites(favId: any) {
  return axios.post('/favourites/find', favId);
}

export function getEatById(searchOptions: any) {
  return axios.post('/eat/find', searchOptions);
}

export function getShopById(searchOptions: any) {
  return axios.post('/shop/find', searchOptions);
}

export function getProductById(searchOptions: any) {
  return axios.post('/product/find', searchOptions);
}

export function getAnyItemById(id: string) {
  return axios.post('/findany', id);
}

export function updateImageToItem(newImg: any) {
  return axios.put('/updateimages', newImg);
}

export function toggleFavourite(favItemObject: any) {
  return axios.put('/favourites', favItemObject);
}

export function getCategories() {
  return axios.get('/category/all');
}

// function to send search term queries to server:
export async function sendSearchQuery(searchTerm: any) {
  const eatsPromise = await getEatsSearchResults({ searchTerm: searchTerm });
  const shopsPromise = await getShopsSearchResults({ searchTerm: searchTerm });
  const productsPromise = await getProductsSearchResults({
    searchTerm: searchTerm,
  });
  return [eatsPromise, shopsPromise, productsPromise];
}
