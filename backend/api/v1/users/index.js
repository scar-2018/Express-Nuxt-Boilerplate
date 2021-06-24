const express = require('express')
const router = express.Router()
const authorize = require('../../../middlewares/authorize')
const controller = require('./controller')

router.get('/', authorize('ADMIN'), controller.getUsers)

module.exports = router
