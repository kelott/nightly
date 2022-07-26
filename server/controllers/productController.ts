// @ts-nocheck

const { Product } = require('../models/product.ts');

exports.getAllProducts = async (ctx) => {
  try {
    ctx.body = await Product.findAll();
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
  }
};

exports.getOneProduct = async (ctx) => {
  const { productId } = ctx.params;
  try {
    ctx.body = await Product.findOne({
      where: {
        id: productId,
      },
    });
    ctx.status = 200;
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
  }
};

exports.getProductsOfCategory = async (ctx) => {
  const { categoryName } = ctx.params;
  try {
    ctx.body = await Product.findAll({
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
