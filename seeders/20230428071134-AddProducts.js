
// xxxxx-AddProducts.js
'use strict';
// Reusable Description
const description = `Funnny original product that makes you go "hahahah funny"`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Nike Womens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Nike Mens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};