// @ts-nocheck

const sequelize = require('./index.ts');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  rate: {
    type: DataTypes.FLOAT,
  },
  count: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Product };
