'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      models.Product.hasMany(models.Variant)
    }
  }
  // model ass explains this at 14:30
  // price needs to be FLOAT
  // need a description  as a TEXT('long') and should have html tags
  // is_published will be a boolean [false or true]
  // slug needs to be a string and its part of the URL 
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

// in migration we need to 