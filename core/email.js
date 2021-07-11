const nodemailer = require('nodemailer')

async function emailSend(sendEmailTo , emailHead, emailHtmlBody) {
  let client = nodemailer.createTransport({
    service: 'qq',
    secure: true,
    auth: {
      user:"2738890162@qq.com",
      pass: 'swwvruluvrqddcjb',
    },
  })

  const mailOptions = {
    html: emailHtmlBody,
    from: 'zedada264@foxmail.com',
    to: sendEmailTo,
    subject: emailHead,
  }

  client.sendMail(mailOptions,(err, info)=>{
    if(err)console.log('err:do not send to ' + sendEmailTo + '\n' + err)
    else console.log('successfully send to ' + sendEmailTo)
  })

}

module.exports = {
  emailSend,
}
