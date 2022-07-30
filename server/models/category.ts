// @ts-nocheck

const sequelize = require('./index.ts');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
  categories: {
    type: DataTypes.STRING,
  },
});

module.exports = { Category };
