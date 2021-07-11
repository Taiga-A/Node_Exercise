const Email = require('emailjs')

async function emailSend(sendEmailTo , emailHead, emailBody) {
  const client = new Email.SMTPClient({
    user: '2738890162@qq.com',
    password: 'swwvruluvrqddcjb',
    host: 'smtp.qq.com',
    ssl: true
  })

  try {
    const mes = await client.sendAsync({
      text: emailBody,
      from: 'zedada264@foxmail.com',
      to: sendEmailTo,
      subject: emailHead
    })
    console.log('Email send seccss,to ' + sendEmailTo)
    return true

  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = {
  emailSend,
}
