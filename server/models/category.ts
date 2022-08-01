// @ts-nocheck

const sequelize = require('./index.ts');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
  category: {
    type: DataTypes.STRING,
  },
});

module.exports = { Category };
