const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

const {User} = require('../../models/user')

router.post('/new', async (ctx, next) => {
  const user = {
    email: ctx.request.body.email,
    nickname: ctx.request.body.nickname,
    phonenumber: ctx.request.body.phonenumber,
    password: ctx.request.body.password,
  }

  ctx.body = user

  User.create(user)

  await next()
})

module.exports = router