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
    console.log(e);
  }
};

exports.populateDbCategories = async function () {
  try {
    const response = await fetch(baseUrl + categoriesUrlEnd, getHtml);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};
