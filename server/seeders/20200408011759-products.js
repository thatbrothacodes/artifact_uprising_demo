'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product', [{
      name: 'Quesadilla',
      description: 'Grilled Flour Tortilla Filled with Melted Cheese, Green Onions and Chiles. Garnished with Guacamole, Salsa and Sour Cream with Chicken.',
      price: '11.50',
      imageUrl: 'CCF_Social_Quesadilla.jpg'
    },
    {
      name: 'Fried Calamari',
      description: 'Fried Light and Crisp. Served with Garlic Dip and Cocktail Sauce.',
      price: '13.95',
      imageUrl: 'CCF_Social_Calamari.jpg'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
