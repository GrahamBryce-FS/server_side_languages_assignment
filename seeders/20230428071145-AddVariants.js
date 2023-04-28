// xxxxx-AddVariants.js
'use strict';
// Reusable Description
const description = "Variant that makes you go 'woah, now thats some variety'"
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'White', slug: 'white', description, price: 89.78, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, title: 'Red', slug: 'red', description, price: 89.78, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, title: 'White', slug: 'white', description, price: 89.78, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Red', slug: 'red', description, price: 89.78, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};