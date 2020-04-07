'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      email: 'thatbrothacodes@gmail.com',
      password: 'abc1234',
      firstName: 'Mark',
      middleName: undefined,
      lastName: 'Washington'
    },
    {
      email: 'd.leugo@gmail.com',
      password: 'abc1234',
      firstName: 'Danny',
      middleName: undefined,
      lastName: 'Luego'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('User', null, {});
  }
};
