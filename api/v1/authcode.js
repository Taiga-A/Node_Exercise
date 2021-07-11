const Router = require('koa-router')

const examineAuthCode = require('../../core/examineAuthCode')
const sendAuthCode = require('../../core/sendAuthCode')

const router1 = new Router({
  prefix: '/user'
})

const router2 = new Router({
  prefix: '/user'
})

router1.get('/authcode', async (ctx, next) => {
  await sendAuthCode(ctx.query.email)
  ctx.body = {
    ok: true
  }
  await next()
})

router2.post('/authcode', async (ctx, next) => {
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


module.exports = router1