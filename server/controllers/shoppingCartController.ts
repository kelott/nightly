// @ts-nocheck

const ShoppingCart = require('../models/shoppingCart.ts');

exports.getShoppingCart = async (ctx) => {
  try {
    ctx.body = await ShoppingCart.findAll();
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.addToShoppingCart = async (ctx) => {
  try {
    await ShoppingCart.create(ctx.request.body);
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
