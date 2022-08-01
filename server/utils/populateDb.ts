// @ts-nocheck

const fetch = require('node-fetch-commonjs');

const baseUrl = 'https://fakestoreapi.com';
const productsUrlEnd = '/products';
const categoriesUrlEnd = '/products/categories';
const categoryUrlEnd = '/products/category';
const getHtml = { method: 'GET' };

exports.populateDbProducts = async function () {
  try {
    const response = await fetch(baseUrl + productsUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log('product fetch failed', e.message);
  }
};

exports.populateDbCategories = async function () {
  try {
    const response = await fetch(baseUrl + categoriesUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log('category fetch failed', e.message);
  }
};
