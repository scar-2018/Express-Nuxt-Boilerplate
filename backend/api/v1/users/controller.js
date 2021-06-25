const { User, Role } = require('../../../models')

module.exports = {
  getUsers: async (req, res) => {
    try {
      const page = req.query.page || 1
      const numPerPage = 10
      const userRole = await Role.getRole('USER')
      const users = await userRole.getUsers({
        order: [
          'username'
        ],
        limit: 10,
        offset: (page - 1) * numPerPage
      })

      console.log(page)
      res.status(200).send({ users })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }
}