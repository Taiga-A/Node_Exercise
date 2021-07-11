const {AuthCode} = require('../models/auth_code')

module.exports = async function examineAuthCode(code) {
  let  = await AuthCode.findOne({
    where: {
      code,
    }
  })
}