// @ts-nocheck

const fetch = require('node-fetch-commonjs');
const fs = require('fs/promises');

const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';
const categoriesUrlEnd = '/products/categories';
const getHtml = { method: 'GET' };

const populateDbProducts = async function () {
  try {
    const response = await fetch(baseUrl + productsUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log('product fetch failed', e.message);
  }
};

const populateDbCategories = async function () {
  try {
    const response = await fetch(baseUrl + categoriesUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log('category fetch failed', e.message);
  }
};

// Fetch data from api and save to json
(async function test() {
  try {
    const products = await populateDbProducts();
    const categories = await populateDbCategories();
    const jsonProducts = JSON.stringify(products);
    const jsonCategories = JSON.stringify(categories);
    fs.writeFile('./server/data/products.json', jsonProducts);
    fs.writeFile('./server/data/categories.json', jsonCategories);
    console.log('json data successfully written to ./server/data/');
  } catch (e) {
    console.log(e.message);
  }
})();
