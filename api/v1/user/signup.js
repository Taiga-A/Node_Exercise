const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

const {User} = require('../../../models/user')
const {emailSend} = require('../../../core/email/email')

router.post('/signup', async (ctx, next) => {
  const user = {
    email: ctx.request.body.email,
    nickname: ctx.request.body.nickname,
    phonenumber: ctx.request.body.phonenumber,
    password: ctx.request.body.password,
  }

  emailSend(user.email, 'Thanks for sign in my house', '哈哈哈哈哈' + user)

  ctx.body = await User.create(user)

  await next()
})

module.exports = router