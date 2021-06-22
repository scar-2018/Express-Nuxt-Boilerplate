const express = require('express')
const APIv1 = require('./v1')

const router = express.Router()

// API Versions
// Latest
router.use('/api', APIv1)

// V1
router.use('/api/v1', APIv1)

module.exports = router
