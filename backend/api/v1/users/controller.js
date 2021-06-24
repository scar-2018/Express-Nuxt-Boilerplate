const { User, Role } = require('../../../models')

module.exports = {
  getUsers: async (req, res) => {
    try {
      const userRole = await Role.getRole('USER')
      const users = await userRole.getUsers()

      res.status(200).send({ users })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}