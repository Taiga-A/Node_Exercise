const Router = require('koa-router')

const examineAuthCode = require('../../../../core/auth/examineAuthCode')

const router = new Router({
  prefix: '/user/authcode'
})


router.post('/push', async (ctx, next) => {
  if( await examineAuthCode(ctx.request.body.code) ) {
    ctx.body = {
      ok: true,
      msg: '验证码正确'
    }
  } else {
    ctx.body = {
      ok: false,
      msg: '验证码错误或过期'
    }
  }
  await next()
})


module.exports = router