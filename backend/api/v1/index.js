const express = require('express')
const router = express.Router()
const passport = require('passport')

const auth = require('./auth')
const users = require('./users')

/*
|---------------------------------------------------------------------
| Public API - Version being used
|---------------------------------------------------------------------
*/
router.get('/', (req, res) => {
  res.send({
    version: '1.0.0'
  })
})

router.use('/auth', auth)
router.use('/users', users)

module.exports = router
