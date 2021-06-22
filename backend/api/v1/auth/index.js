const express = require('express')
const passport = require('passport')
const router = express.Router()
// const { authJwt } = require('../../../middlewares')
const controller = require('./controller')

router.post('/login', controller.login)
// router.post('/register', controller.register)

// router.get('/me', passport.authenticate('jwt', { session: false }), controller.getMe)
// router.get('/logout', passport.authenticate('jwt', { session: false }), controller.logout)

module.exports = router
