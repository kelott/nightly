// @ts-nocheck

const { Category } = require('../models/category.ts');

exports.getAllCategories = async (ctx) => {
  try {
    ctx.body = await Category.findAll();
    // ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
