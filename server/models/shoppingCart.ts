// @ts-nocheck

const sequelize = require('./index.ts');
const { DataTypes } = require('sequelize');

const ShoppingCart = sequelize.define('ShoppingCart', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cartcount: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { ShoppingCart };
