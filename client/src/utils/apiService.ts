// @ts-nocheck
const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';
const getHtml = { method: 'GET' };

export async function getAllProducts() {
  try {
    const response = await fetch(baseUrl + productsUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getOneProduct(productId: number) {
  try {
    const response = await fetch(baseUrl + productsUrlEnd + `/${productId}`, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
