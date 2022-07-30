// @ts-nocheck

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123@localhost/nightly', {
  logging: false,
});

module.exports = sequelize;
