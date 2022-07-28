// @ts-nocheck
const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';

export async function getAllProducts() {
  try {
    const response = await fetch(baseUrl + productsUrlEnd, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
