const axios = require('axios').default;

const places = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PLACES_API,
  headers: {},
});

export function sendPlacesRequest(param: string): Promise<any> {
  return places
    .get(`json?input=${param}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
