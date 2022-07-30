// @ts-nocheck
const localBaseUrl = 'http://localhost:4000';
const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';
const categoriesUrlEnd = '/products/categories';
const categoryUrlEnd = '/products/category';
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
    const response = await fetch(localBaseUrl + productsUrlEnd + `/${productId}`, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(baseUrl + categoriesUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getProductsOfCategory(category: string) {
  try {
    const response = await fetch(baseUrl + categoryUrlEnd + `/${category}`, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
