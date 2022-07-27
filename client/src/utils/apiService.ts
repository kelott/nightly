import { Products } from './types';

const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';

export async function getAllProducts(): Promise<Products> {
  const response = await fetch(baseUrl + productsUrlEnd, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
}
