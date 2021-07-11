const strRandom = require('string-random')

const {AuthCode} = require('../models/auth_code')
const {emailSend} = require('./email')

module.exports = async function sendAuthCode(email) {
  do {
    var newCode = strRandom(6,'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    var res = await AuthCode.findOne({
      where:{code: newCode}
    })
  }while(res)

  emailSend(
    email,
    '[泽大大的小屋]验证码(1分钟内有效)',
    '<div style="color: #fff;background:#000;padding: 30px;font-size: 50px;">' + '👋' + newCode + '</div>'
  )

  const jane = await AuthCode.create({code: newCode})

  setTimeout(()=>{
    try {
      jane.reload()
      if(jane) {
        jane.destroy()
      }
    } catch {}
  },1*60*1000)

}