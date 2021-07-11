const {
  AuthCode
} = require('../models/auth_code')

module.exports = async function examineAuthCode(code) {
  let jane = await AuthCode.findOne({
    where: {
      code,
    }
  })

  if (jane) {
    jane.destroy()
    return true
  } else return false
}