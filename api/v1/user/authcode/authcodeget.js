const Router = require('koa-router')

const sendAuthCode = require('../../../../core/auth/sendAuthCode')

const router = new Router({
  prefix: '/user'
})


router.get('/authcodeget', async (ctx, next) => {
  await sendAuthCode(ctx.query.email)
  ctx.body = {
    ok: true
  }
  await next()
})

module.exports = router