// @ts-nocheck
const localBaseUrl = 'http://localhost:4000';
const productsUrlEnd = '/products';
const categoriesUrlEnd = '/products/categories';
const categoryUrlEnd = '/products/category';
const shoppingCartUrlEnd = '/shoppingcart';
const getHtml = { method: 'GET' };

export async function getAllProducts() {
  try {
    const response = await fetch(localBaseUrl + productsUrlEnd, getHtml);
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
    const response = await fetch(localBaseUrl + categoriesUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getProductsOfCategory(category: string) {
  try {
    const response = await fetch(localBaseUrl + categoryUrlEnd + `/${category}`, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllCartItems() {
  try {
    const response = await fetch(localBaseUrl + shoppingCartUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function addCartItem(productToAdd) {
  try {
    const data = await fetch(localBaseUrl + shoppingCartUrlEnd, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productToAdd),
    });
    const result = await data.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function modifyCartItem(productToModify) {
  try {
    const data = await fetch(localBaseUrl + shoppingCartUrlEnd, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productToModify),
    });
    const result = await data.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteCartItem(productToDelete) {
  try {
    const data = await fetch(localBaseUrl + shoppingCartUrlEnd, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productToDelete),
    });
    const result = await data.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
