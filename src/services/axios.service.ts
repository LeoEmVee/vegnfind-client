const axios = require('axios').default;

const appService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

appService.defaults.headers.post['Content-Type'] = 'application/json';
appService.defaults.withCredentials = false;

export function getUserByCondition(condition: {
  [key: string]: string;
}): Promise<any> {
  return appService.post('/veggie/find', condition); // returns user or error
}

export function submitLoginForm(data: any): Promise<any> {
  return appService.post('/login', data); // returns jwt token or error
}

export function submitRegisterForm(data: any): Promise<any> {
  return appService.post('/register', data); // returns new user without password or error
}

export function validateToken(data: any): Promise<any> {
  return appService.post('/validate', data); // returns decoded token as {username:username} or null
}

export function createProduct(data: any): Promise<any> {
  return appService.post('/product/create', data); // returns new product or error
}

export function createShop(data: any): Promise<any> {
  return appService.post('/shop/create', data); // returns new shop or error
}

export function createEat(data: any): Promise<any> {
  return appService.post('/eat/create', data); // returns new restaurant or error
}

export function createReview(review: any): Promise<any> {
  return appService.post('/review/create', review); // returns new review or error
}

export function getCloudinaryUrl(dataString: any): Promise<any> {
  return appService.post('/cloudinary', dataString);
}

export function getEatsSearchResults(searchOptions: any) {
  return appService.post('/eat/findall', searchOptions);
}

export function getShopsSearchResults(searchOptions: any) {
  return appService.post('/shop/findall', searchOptions);
}

export function getProductsSearchResults(searchOptions: any) {
  return appService.post('/product/findall', searchOptions);
}

export function getFavourites(favId: any) {
  return appService.post('/favourites/find', favId);
}

export function getEatById(searchOptions: any) {
  return appService.post('/eat/find', searchOptions);
}

export function getShopById(searchOptions: any) {
  return appService.post('/shop/find', searchOptions);
}

export function getProductById(searchOptions: any) {
  return appService.post('/product/find', searchOptions);
}

export function getAnyItemById(id: string) {
  return appService.post('/findany', id);
}

export function updateImageToItem(newImg: any) {
  return appService.put('/updateimages', newImg);
}

export function toggleFavourite(favItemObject: any) {
  return appService.put('/favourites', favItemObject);
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
