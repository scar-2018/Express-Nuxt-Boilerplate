const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { User, Role } = require('../../../models')
const { secret } = require('../../../config/auth')

module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        },
        include: [{
          model: Role,
          as: 'role'
        }]
      })

      if (!user) {
        res.status(404).send({
          message: 'User not found.'
        })
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        res.status(401).send({
          message: 'Invalid email or password.'
        })
      }

      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400 // 24 hours
      })

      res.status(200).send({
        token,
        user
      })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  },

  // signup: (req, res) => {
  //   User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: bcrypt.hashSync(req.body.password, 8)
  //   }).then((user) => {
  //     user.setRoles([1]).then(() => {
  //       res.send({ message: 'User was registered successfully!' })
  //     })
  //   }).catch((err) => {
  //     res.status(500).send({ message: err.message })
  //   })
  // },

  getMe: async (req, res) => {
    res.status(200).send({ user: req.user })
  },

  logout: async (req, res) => {
    req.logout()

    res.status(200).send({
      message: 'Successfully logged out'
    })
  }
}