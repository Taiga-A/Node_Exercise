const Router = require('koa-router')

const sendAuthCode = require('../../../../core/auth/sendAuthCode')

const router = new Router({
  prefix: '/user/authcode'
})


router.get('/get', async (ctx, next) => {
  await sendAuthCode(ctx.query.email)
  ctx.body = {
    ok: true
  }
  await next()
})

module.exports = router