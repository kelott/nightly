// @ts-nocheck

const { ShoppingCart } = require('../models/shoppingCart');

exports.getShoppingCart = async (ctx) => {
  try {
    const cartItems = await ShoppingCart.findAll();
    ctx.status = 200;
    ctx.body = cartItems;
  } catch (e) {
    console.log(e.message);
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

exports.removeFromShoppingCart = async (ctx) => {
  try {
    const id = ctx.request.body.productId;
    ctx.body = await ShoppingCart.destroy({ where: { productId: id } });
    ctx.status = 200;
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
  }
};