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

  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

// in migration we need to 