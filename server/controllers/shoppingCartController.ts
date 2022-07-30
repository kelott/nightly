// @ts-nocheck

const { ShoppingCart } = require('../models/shoppingCart');

exports.getShoppingCart = async (ctx) => {
  try {
    ctx.body = await ShoppingCart.findAll();
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
  }
};

exports.addToShoppingCart = async (ctx) => {
  try {
    await ShoppingCart.create(ctx.request.body);
    ctx.body = ctx.request.body;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
