// @ts-nocheck

const { Category } = require('../models/category.ts');
const { populateDbCategories } = require('../utils/populateDb');

exports.getAllCategories = async (ctx) => {
  try {
    ctx.body = await Category.findAll();
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
exports.getProductsOfCategory = async (ctx) => {
  const { categoryName } = ctx.params;

  try {
    ctx.body = await Category.findAll({
      where: {
        category: categoryName,
      },
    });
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
