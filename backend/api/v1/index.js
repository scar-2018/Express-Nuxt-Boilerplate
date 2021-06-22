const express = require('express')
const router = express.Router()
const passport = require('passport')

const auth = require('./auth')

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

module.exports = router
