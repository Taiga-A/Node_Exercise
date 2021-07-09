const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

const {User} = require('../../models/user')

router.post('/login', async (ctx, next) => {
  const user = {
    type: ctx.request.body.type,
    key: ctx.request.body.key,
    password: ctx.request.body.password,
  }







  await next()
})

module.exports = router