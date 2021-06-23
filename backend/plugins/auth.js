const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')

const { User, Role } = require('../models')
const { secret } = require('../config/auth')

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secret

passport.use(new JwtStrategy(opts, async (token, done) => {
  try {
    const user = await User.findByPk(token.id, {
      include: [{
        model: Role,
        as: 'role'
      }]
    })

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch (error) {
    done(err, false)
  }
}))