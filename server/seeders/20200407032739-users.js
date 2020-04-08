'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      email: 'thatbrothacodes@gmail.com',
      password: 'abc1234',
      firstName: 'Mark',
      middleName: undefined,
      lastName: 'Washington',
      createDate: new Date()
    },
    {
      email: 'd.leugo@gmail.com',
      password: 'abc1234',
      firstName: 'Danny',
      middleName: undefined,
      lastName: 'Luego',
      createDate: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('User', null, {});
  }
};
