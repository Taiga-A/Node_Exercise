const jwt = require('jsonwebtoken')

const config = require('../config/config')

const getToken = function(id, scope) {
  const token = jwt.sign({
    id,
    scope
  },
  config.security.key,
  {
    expiresIn: config.security.time
  })

  return token
}

module.exports = {
  getToken,
}
