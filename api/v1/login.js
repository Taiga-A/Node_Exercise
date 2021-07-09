const Router = require('koa-router')

const loginTest = require('../../core/loginTest')

const router = new Router({
  prefix: '/user'
})


router.post('/login', async (ctx, next) => {
  const user = {
    type: ctx.request.body.type,
    key: ctx.request.body.key,
    password: ctx.request.body.password,
  }

  ctx.body = await loginTest(user)

  await next()
})

module.exports = router