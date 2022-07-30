// @ts-nocheck

const sequelize = require('./index.ts');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

module.exports = { Category };
