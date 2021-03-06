const Router = require('koa-router')

const loginTest = require('../../../core/loginTest')
const {
  getToken
} = require('../../../core/util')

const router = new Router({
  prefix: '/user'
})


router.post('/signin', async (ctx, next) => {
  const user = {
    type: ctx.request.body.type,
    key: ctx.request.body.key,
    password: ctx.request.body.password,
  }

  ctx.body = await loginTest(user)
  if (ctx.body.ok) {
    ctx.body['token'] = getToken(ctx.body.id, 2)
  }

  await next()
})

module.exports = router