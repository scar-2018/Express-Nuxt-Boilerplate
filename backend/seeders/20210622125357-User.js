'use strict'

const faker = require('faker')
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const admin = {
      id: 1,
      email: 'admin@admin.com',
      username: 'Admin',
      password: bcrypt.hashSync('password'),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const users = [...Array(100)].map((user) => {
      return {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: bcrypt.hashSync('password'),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('Users', [admin, ...users], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}